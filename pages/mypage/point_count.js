import Mypage from '../../components/Mypage.js';
import Button from '../../components/parts/Button.js';
import { useState } from "react";
import { useRouter } from "next/router";
import API from './../../plugins/customAxios.js';

export default function PointCount() {

  const router = useRouter();

  const [memberName, setMemberName] = useState("");
  const [userType, setUserType] = useState(router.query.userType);

  async function selectRoom() {
    //
  }

  return (
    <Mypage title="">
      <div>
        { userType }
      </div>
    </Mypage>
  )
}
