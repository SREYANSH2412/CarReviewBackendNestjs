import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserBasicService } from 'src/user/user.basic.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FirebaseModule } from 'src/firebase/firebase';
import * as admin from 'firebase-admin';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithCustomToken,
  Auth,
  getAuth,
} from '@firebase/auth';
import { FirebaseApp, initializeApp } from '@firebase/app';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Review, ReviewDocument } from 'src/review/schema/review.schema';
import { ReviewService } from 'src/review/review.service';
import { FavoriteService } from 'src/favorite/favorite.service';
import { TestdriveService } from 'src/testdrive/testdrive.service';

@Injectable()
export class UserService {
  private auth: Auth;
  constructor(
    @InjectModel(User.name, ModuleDefiner.carDB)
    private readonly userModel: Model<UserDocument>,

    private jwtService: JwtService,
    private readonly userBasicService: UserBasicService,

    private readonly reviewService: ReviewService,
    private readonly favoriteService: FavoriteService,

    private readonly testdriveService: TestdriveService,
  ) {
    const firebaseConfig = {
      apiKey: 'AIzaSyAFFemp6ciROXZCm8hVESg-YF_7zk4_Fm8',
      authDomain: 'car-review-8a679.firebaseapp.com',
      projectId: 'car-review-8a679',
      storageBucket: 'car-review-8a679.appspot.com',
      messagingSenderId: '768565198389',
      appId: '1:768565198389:web:ea64e833d30df845c47b7c',
      measurementId: 'G-D5R8FN71HM',
    };

    const app: FirebaseApp = initializeApp(
      firebaseConfig,
      ModuleDefiner.carClientFirebaseApp,
    );
    this.auth = getAuth(app);
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    // FirebaseModule.init();
  }

  async createUser(createUserDto: CreateUserDto): Promise<{ token: string }> {
    // return this.userBasicService.createUser(createUserDto);
    try {
      const { password, ...restDto } = createUserDto;
      const hashedpass = await bcrypt.hash(password, 10);
      createUserDto.password = hashedpass;

      const user = await this.userModel.create(createUserDto);

      const token = this.jwtService.sign({ id: user._id });

      return { token };
    } catch (e) {
      console.log(e);
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    try {
      const { email, password } = loginDto;

      const user = await this.userModel.findOne({ email });

      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const token = this.jwtService.sign({ id: user._id });
      return { token };
    } catch (e) {
      console.log(e);
    }
  }

  // async createUser(createUserDto: CreateUserDto){
  //     // return this.userBasicService.createUser(createUserDto);
  //     const { password, ...restDto } = createUserDto;
  //     const user = await this.userModel.create(restDto);

  //     await this.signUpWithEmailPassword(
  //         user.email,
  //         password
  //     );
  //     const emailData = {
  //         email: user.email,
  //         admin_name: user.Name,
  //         password,
  //     };
  //     console.log(emailData)
  //     const token = await admin
  //         .auth(FirebaseModule.carFirebaseApp)
  //         .createCustomToken(user._id.toString());

  //       return { token: token };
  // }

  // async createUser(createUserDto: CreateUserDto){
  //     // return this.userBasicService.createUser(createUserDto);
  //     const { password, ...restDto } = createUserDto;
  //     const user = await this.userModel.create(restDto);
  //     console.log(user._id.toString())
  //     await this.signUpWithEmailPasswordCustomUid(
  //         user.email,
  //         password,
  //         user._id.toString(),
  //     );
  //     const emailData = {
  //         email: user.email,
  //         admin_name: user.Name,
  //         password,
  //     };
  //     console.log(emailData)
  // }

  async signUpWithEmailPasswordCustomUid(
    email: string,
    password: string,
    customUid: string,
  ) {
    try {
      // Create user with specified UID using Firebase Admin SDK
      console.log(1);
      const userRecord = await admin
        .auth(FirebaseModule.carFirebaseApp)
        .createUser({
          uid: customUid,
          email: email,
          password: password,
        });

      // You can add additional logic here if needed

      // Generate token if required
      console.log(2);
      const token = await admin
        .auth(FirebaseModule.carFirebaseApp)
        .createCustomToken(userRecord.uid);
      console.log(3);
      return { token: token };
    } catch (err) {
      console.log(err);
      throw new HttpException('Failed to sign up user', HttpStatus.BAD_REQUEST);
    }
  }

  async signUpWithEmailPassword(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      const token = await userCredential.user.getIdToken();
      return { token: token };
    } catch (err) {
      console.log(err);
      throw new HttpException('Failed to sign up user', HttpStatus.BAD_REQUEST);
    }
  }

  async fetchUser(id: string) {
    try {
      const user = this.userModel.findOne({ _id: id });
      if (user) {
        return { user };
      }
      return 'User not found';
    } catch (e) {
      console.log(e);
    }
  }

  async fetchReviews(id: string) {
    try {
      const reviews = this.reviewService.findforUser(id);
      if (reviews) {
        return { reviews };
      }
      return 'No Reviews found';
    } catch (e) {
      console.log(e);
    }
  }

  async fetchFav(id: string) {
    try {
      return this.favoriteService.getFavCar(id);
    } catch (e) {
      console.log(e);
    }
  }

  async fetchTestdrive(id: string) {
    try {
      return this.testdriveService.findbyUser(id);
    } catch (e) {
      console.log(e);
    }
  }
}
