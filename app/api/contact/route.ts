import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// SendGridのAPIキーを設定
// 注意: 実際の環境では環境変数から取得するようにしてください
// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 必須フィールドの検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '名前、メールアドレス、メッセージは必須です' },
        { status: 400 }
      );
    }

    // メール送信の設定
    const msg = {
      to: 'inoue12hiroki@gmail.com', // 受信者のメールアドレス
      from: 'inoue12hiroki@gmail.com', // 送信者のメールアドレス（SendGridで検証済みのアドレスである必要があります）
      subject: `自己紹介サイトからのお問い合わせ: ${name}`,
      text: `
        名前: ${name}
        メールアドレス: ${email}
        
        メッセージ:
        ${message}
      `,
      html: `
        <strong>名前:</strong> ${name}<br>
        <strong>メールアドレス:</strong> ${email}<br><br>
        <strong>メッセージ:</strong><br>
        ${message.replace(/\n/g, '<br>')}
      `,
    };

    // SendGridのAPIキーが設定されていない場合はコンソールにログを出力するだけ
    if (!process.env.SENDGRID_API_KEY) {
      console.log('SendGrid APIキーが設定されていないため、メールは送信されません');
      console.log('送信されるはずのメール内容:', msg);
      return NextResponse.json(
        { success: true, message: 'テストモード: メールは送信されませんでした（APIキーが設定されていないため）' },
        { status: 200 }
      );
    }

    // メール送信
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'メッセージが送信されました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メッセージの送信に失敗しました' },
      { status: 500 }
    );
  }
} 