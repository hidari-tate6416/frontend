import Index from '../components/Index.js';
import Button from '../components/parts/Button.js';
import { useState } from "react";
import { useRouter } from "next/router";
import API from './../plugins/customAxios.js';

export default function Login() {

  const router = useRouter();
  const [alertText, setAlertText] = useState("");

  async function loginClick() {
    setAlertText("");

    // document.getElementById("loginId").value = 'hiroto';
    // document.getElementById("password").value = 'hiroto';

    let loginId = document.getElementById('loginId');
    let password = document.getElementById('password');
    if (!loginId.value || !password.value) {
      setAlertText("ログインIDかパスワードが入力されていません。");
      return;
    }

    await API.post('app/login', {
      "login_id": loginId.value,
      "password": password.value
    }).then(res => {
      if ('OK' === res.data.result) {
        API.interceptors.request.use(
          async config => {
            config.headers = {
              'Authorization': `Bearer ` + res.data.token,
            }
            return config;
        });
        router.push({ pathname: "mypage/"});
      }
    }).catch(err => {
      // console.log('error');
      // console.log(err);
    });
  }

  return (
    <Index title="">
      <div class="my-20 mx-auto w-3/4 rounded-md bg-white text-center">
        <div class="font-semibold text-2xl py-5">
          サインイン
        </div>
        <span class="text-xs">ログインIDとパスワードを入力してログインボタンを押してください</span>
        <div class="mt-5 mb-3 w-1/2 md:w-1/3 mx-auto text-left">
          <div class="mb-5 mx-auto">
            <span class="text-xl">Login id</span>
            <input type="text" id="loginId" class="mt-3 py-2 pl-2 rounded-md border-2 border-black" placeholder="ログインID" />
          </div>
          <div class="mb-10 mx-auto">
            <span class="text-xl">password</span>
            <input type="password" id="password" class="mt-3 py-2 pl-2 rounded-md border-2 border-black" placeholder="パスワード" />
          </div>
        </div>
        <Button func={ loginClick }>ログイン</Button>
        {(alertText) && <div class="text-xs text-red-500 pb-6">{ alertText }</div>}
      </div>
    </Index>
  )
}
