// script.js

// フォーム送信時のバリデーション
function verifyContactForm() {
    var name = document.getElementById('guest-name').value;
    var email = document.getElementById('guest-email').value;
    var subject = document.getElementById('mail-subject').value;
    var body = document.getElementById('mail-body').value;

    if (!(name && email && subject && body)) {
        alert('問い合わせ内容に不備があります');
        return false;
    }

    return true;
}
