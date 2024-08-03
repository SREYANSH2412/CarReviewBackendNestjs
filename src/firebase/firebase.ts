import * as firebaseAdmin from 'firebase-admin';
import 'dotenv/config';
import ModuleDefiner from '../utils/module_definer';

export class FirebaseModule {
  static carFirebaseApp: firebaseAdmin.app.App;

  static init() {
    const carKey =
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC47QAn9Wl4ryWe\nIKYRaSplGKmlheBJythv7P6XhIkrigt/um9Txf7jxdcLGRInyCo9Rl86xV9J4S3Y\nbLV1/lNzBlAJtfDS9xPkXBFYfC+RTaTXD8OX/6lhNSYzcUXJMbRymdXDB31hi/5Y\nL0+j21mv6jApouQlJXUxsqwVSfTdQyvgPOJhcA78Uc10CGMh+DX5+535YLrdfLqr\nXFdW452GLH4grZ/ioiXT47BhDF04JsKGqFfWEYNaaWjcx0K5SJZF2dAV0uIvRqxe\n7SABec8E5sfoZNb9Ep+G9UYrs1l6yWYlvREawDfiMmmqRvMEO1ZYGIkxwOsv2WrD\nxTn+pmmXAgMBAAECggEACQBvEa2Ltku0UD0KSG5ZmXU4ti13oa/wQYvZnW+JVny6\n8DtCNbjoHkH1pKfSRJck8zmh42moffSqTM7cixitCubY7jgUjSMTgqS2qsYqHJpu\ndpI2X7JFa6LGMBqInpwUSsB78X6ZAa6/sUmQSLYh6K3E2BStTV+Zk6iSYYY+7Kbw\npJdC2/Iv0BywFmKISFhD3CkuKcXOdVBSUx4FCoJKMS0kW3nCRI9sDbR/YYeWc7Ky\nIebW9nQ1sUa4pjgGraIYKXjcyn/IBlF513te/G/OxmZTgSZ0+JpHP9uYspvvk/PF\nGR/lb+ZO2j9FJXoJ543Js3x6Ye8G3HvEHswtdeqTrQKBgQDt5Qh1mfUnl+nB5DHz\nYXMXMZygpdiN23Gz9KVX2q0/2AiXSgngBGBpEdFAd4Zxdi/SkeUf2zKVcogmc5xT\nJmKJZVMd82xEiQo/ZKHlBmNVmMQ+2UcNsAVWGIkQFbBn54tRCduUkBcXc54ZlZXh\nWIQMwoXvfqyk6SojXGbIujv1iwKBgQDG//XdA6J1QfDBh07676ym6eJXMWBGVFqG\nr2lYwdptZd1gKW5yOxLPifm9tYaeLSmFCHchCFoOU5dU31EWhVCpNJiK/58bhYI9\norbiPlZtXmeU9tTb9Br0OaxFNZdYPwyeqPfX9XnXWYE5AOVizlceQX/+Y6tJzl8X\nQ5vIm65VpQKBgCMo1IU9CeSeKShE57UG1BG7fWCo4kalBjsIj19arHxhG3Pwt2Dq\nhK1CuuCCSdZ/FzZR5cE9jk5ULRcxwwrvA2U3Gn+0uG2wq1kPMHY+6XN/LpHzXvMA\n7uj4m1lLO1U//XEuuctNOHx41AcH+qzhfjK8lTr+R9nftCChyXclPzNdAoGACcur\ntJdrNc5rJXudnaiSnRzCMXySuqOIWTzlOKNCN0ReY09mymSyBllKW9ZFrB+Y/Z1v\nD8czd6URu/HKMguZ7tpR7/WpRVeLE7Ggwv5CjtuoyaJk0/buJLt6CWYb7xIbcuvq\nV00UFE+plr6+i+CQVULwI/uQAPARqjl/v546NKkCgYA8a6Y8CxL25TLqDkPpvqFr\nK6ZJc1Mo9BT2PPdKZhuLSp6trnifaf2rUvwgCtfF3XcVermcYk8vsNnXspkZzavB\n9DtiGcPQrmXBWFKMuCoILI2ufFADAD9y5ScmB+U6QNZcscILoSqGOkSYuhta4XgA\n+yXmirHFOht1A5ny7q8FRw==\n-----END PRIVATE KEY-----\n';

    const carFirebaseServiceAccount = {
      type: process.env.car_firebase_type,
      project_id: process.env.car_firebase_project_id,
      private_key_id: process.env.car_firebase_private_key_id,
      private_key: carKey,
      client_email: process.env.car_firebase_client_email,
      client_id: process.env.car_firebase_client_id,
      auth_uri: process.env.car_firebase_auth_uri,
      token_uri: process.env.car_firebase_token_uri,
      auth_provider_x509_cert_url:
        process.env.car_firebase_auth_provider_x509_cert_url,
      client_x509_cert_url: process.env.car_firebase_client_x509_cert_url,
      universe_domain: process.env.car_firebase_universe_domain,
    };
    this.carFirebaseApp = firebaseAdmin.initializeApp(
      {
        credential: firebaseAdmin.credential.cert(
          carFirebaseServiceAccount as firebaseAdmin.ServiceAccount,
        ),
      },
      ModuleDefiner.carFirebaseApp,
    );
  }
}
