import * as firebaseAdmin from 'firebase-admin';
import 'dotenv/config';
import ModuleDefiner from '../utils/module_definer';

export class FirebaseModule {
  static carFirebaseApp: firebaseAdmin.app.App;

  static init() {
    const carKey = 
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCcT2DcjkfG8snF\nLPBHhYZiEIsNelyK8/I4MHGbOdUHQzNbctadgbw45sd7Wu2+Jnw3wxCOkqLASRaz\n3Mc17WE3eMbrWTrZIjq1eDOsfnmv7JZA1JkXgej02YV6FAkxea0DDkz84ydk+XZs\nKgQMGObInszeZY2uCKFlfKmfm1GrEobeLtaGC8HTs7FKwF4Pm5prTSQY7YYmym5T\nnpmm1M0OOJeKKQduGlyRKWINWAEliiH5wfH6tD2W3Zf5vOBDY+ZHLAMVV3b8wXFu\n07kG1G36zN0XOv9sBR+msBAQy5c+Jzl6bGRMuXuKJ+O3XMgplQZHprcL/4NWab5+\nskeORRs5AgMBAAECggEACcOgIXruUyhSsBNb8Z3OzJSruQRwIDp3oqitChUpYGYj\nYMaqTyW96iCJbMRb9k09ZHbWE4/npIMUTNlBZPYehOpxo5078rkjiXc4JCH07EdH\nRga5xvkFojjt0HfMsLdg9kBIESKH8RPvwLc5sD9EeFsKIWje2jSeD2LDjk2zou/g\n4bWCt2DGlqbkKg2B59EvsQm1UogT/T0YVKomS+O4e3/Q3Vl6TuE79zLzYQfwRtdj\n6ZJXVdZapudOz+t/q2MxcqYHJWYKbStGg90HDzPJKCSRdnhkPGeEys77mI1Df3ay\ny9peba0OQKO+v9ln6wMBK26EgZllyCIh2xyLoAQJEQKBgQDZvia5jY1qZTCveG80\nw+8zw5oceM5q5iu+Q4E8GkqvCgM8KV6Q8TLKoO+Nc+Jp1TbWSmWbo66r1fuZMdmQ\n63jbk1ARH3wb5nB9OjCJepy2wTJUxReDPTjxBydITz+SDAt1OhQGZSKNv38VVH1j\nglmy2/7GQG+Y8JgVB3GePAYOcQKBgQC3xgviqogdQ/GtdgIneDzZs2QvY5CoAD7K\nN27nACszdYmiv5+URSN8Xm3OQOi/rzU5oZJzA/mCUrYBfJpWOKcWT+8PyP5oir8v\n5lgaz8kqzBhjWJys+osq18vaMXEg1CQlNGYjOxRFlTG+WTugoIOsIHT1BED70aNb\nfP8A0ONNSQKBgGkP7RN/D4sUxEcGb3IgUFzDtqqiR8cgxF6Lp+HeNcb7p8/xjiWV\nnBJVUQEJt2elb046m4hblD5pg3rJqNbaJ3ibPfjlHjdAG2rxFtZfCRrNYYGxj8TN\nV5pE/1lOk7feg/DOUzc6uU935NPf7piDHtDEgcwa7z32aQtMii/1el6hAoGAVYuY\nPsQZJl5ZYuCa8hqTYNeT3EdhsAKlN+aD9n3qnkKpdhvzQcbJVPxz6t3mOkxp31Dp\n5iZEgDjWRmzlPxuSE93Tr6plWu6zPq3f92MgBo8JDz3ReOgL3j6jwwbe3WRDCxqQ\nLPg0YIupoyzQh94QTRCywNdhFJeqjkzqO0wBcxkCgYEA1LZG2KA57HhVT9esZCWA\ngjTVK7jJVkZSa0GBjXoxmijSPR2C+HNvM/OA0QcxM7SwCmuqWIqeTzdRRJEN+47f\nCAhxErneKFSnq2v2vLAO/5fX+i1rlC0svP10BLL+ih2fP4wZf31B5WYjDBLzjQNe\n8Ol7cMGy1IiTygMBwt6MO10=\n-----END PRIVATE KEY-----\n";
    console.log("a")
    const carFirebaseServiceAccount = {
      type: process.env.car_firebase_type,
      project_id: process.env.car_firebase_project_id,
      private_key_id: process.env.car_firebase_private_key_id,
      private_key: carKey,
      client_email: process.env.car_firebase_client_email,
      client_id: process.env.car_firebase_client_id,
      auth_uri: process.env.car_firebase_auth_uri,
      token_uri: process.env.car_firebase_token_uri,
      auth_provider_x509_cert_url: process.env.car_firebase_auth_provider_x509_cert_url,
      client_x509_cert_url: process.env.car_firebase_client_x509_cert_url,
      universe_domain: process.env.car_firebase_universe_domain,
    };
    console.log("b")
    this.carFirebaseApp = firebaseAdmin.initializeApp(
      {
        credential: firebaseAdmin.credential.cert(
          carFirebaseServiceAccount as firebaseAdmin.ServiceAccount,
        ),
      },
      ModuleDefiner.carFirebaseApp,
    );
    console.log("c")
  }
}
