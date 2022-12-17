import Mypage from '../../components/Mypage.js';
import Button from '../../components/parts/Button.js';
import SmallButton from '../../components/parts/SmallButton.js';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import API from './../../plugins/customAxios.js';
import CustomModal from '../../components/parts/CustomModal.js';

function PointCount() {

  const router = useRouter();

  const [rooms, setRooms] = useState([]);
  const [colors, setColors] = useState([]);
  const [userType, setUserType] = useState(router.query.userType);
  const [showCreateModal, setShowCreateModal] = useState(false);


  useEffect(() => {
    async function fetchData() {
      await API.get('app/list_score_room').then(res => {
        setRooms(res.data.rooms);
        return res;
      }).catch(err => {
        // console.log(err);
        return err;
      });

      await API.get('app/menu/create_score_room').then(res => {
        setColors(res.data.menus);
        return res;
      }).catch(err => {
        // console.log(err);
        return err;
      });
    }

    fetchData();
    }, []);

  async function createRoom() {
    setShowCreateModal(true);
  }

  async function createRoomComplete() {
    let roomName = document.getElementById('roomName');
    let roomPassword = document.getElementById('roomPassword');
    let defaultPoint = document.getElementById('defaultPoint');
    let hostColor = document.getElementById('hostColor');
    let guest1Color = document.getElementById('guest1Color');
    let guest2Color = document.getElementById('guest2Color');
    let guest3Color = document.getElementById('guest3Color');
    let guest4Color = document.getElementById('guest4Color');
    if (!roomName.value || !roomPassword.value || !defaultPoint.value || 0 == hostColor.value) {
      setAlertText("入力内容が不足しています。");
      return;
    }

    await API.post('app/create_score_room', {
      "default_score": defaultPoint.value,
      "room_name": roomName.value,
      "room_password": roomPassword.value,
      "host_color": hostColor.value,
      "guest1_color": guest1Color.value,
      "guest2_color": guest2Color.value,
      "guest3_color": guest3Color.value,
      "guest4_color": guest4Color.value,
    }).then(res => {
      if ('OK' === res.data.result) {
        router.push({ pathname: "point_room", query: {memberNo: 0}}, "point_room");
      }
    });
  }

  async function selectRoom(roomId) {
    //
  }

  async function clooseCreateModal() {
    setShowCreateModal(false);
  }

  return (
    <Mypage title="ポイントカウント">
      <div>
        <div class="my-5 mx-auto text-center">
          <div class="my-6">参加したい部屋を選ぶか部屋を作って楽しみましょう。</div>
          <Button func={ createRoom }>部屋を作る</Button>
        </div>
        <table class="table-auto w-full mx-auto text-center">
          <thead>
            <tr>
              <th>テーブル名</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr>
                <td class="h-24 text-2xl md:text-3xl mr-4">{ room.room_name }</td>
                <td><SmallButton func={ selectRoom(room.room_id) }>部屋に入る</SmallButton></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomModal
        modalShow={ showCreateModal }
        closeModalFunc={ clooseCreateModal }
        buttonFunc={ createRoomComplete }
        buttonText='部屋を作る'
      >
        <div>
          <div class="text-center text-3xl">ルーム作成</div>
          <div class="md:flex mt-5">
            <div class="flex justify-between">
              <span class="my-auto md:mr-4">ルーム名</span>
              <input type="text" id="roomName" class="py-2 pl-2 rounded-md border-2 border-black" placeholder="ルーム名" />
            </div>
            <div class="flex justify-between md:ml-10 mt-3">
              <span class="my-auto md:mr-4">ルームパスワード</span>
              <input type="text" id="roomPassword" class="py-2 pl-2 rounded-md border-2 border-black" placeholder="1234" />
            </div>
            <div class="flex justify-between md:ml-10 mt-3">
              <span class="my-auto md:mr-4">初期点数</span>
              <input type="text" id="defaultPoint" class="py-2 pl-2 rounded-md border-2 border-black" placeholder="100" />
            </div>
          </div>
          <div class="md:flex mt-7">
            <div class="flex justify-between">
              <span class="my-auto md:mr-4">自分のプレイヤーカラー</span>
              <select id="hostColor" class="h-10 rounded-md border-2 border-black">
                <option value="0">選択してください</option>
                {colors.map(color => (
                  <option value={ color.id }>{ color.name }</option>
                ))}
              </select>
            </div>
          </div>
          <div class="md:flex">
            <div class="flex justify-between mt-3">
              <span class="my-auto md:mr-4">プレイヤー1カラー</span>
              <select id="guest1Color" class="h-10 rounded-md border-2 border-black">
                <option value="0">プレイヤーなし</option>
                {colors.map(color => (
                  <option value={ color.id }>{ color.name }</option>
                ))}
              </select>
            </div>
            <div class="flex justify-between mt-3 md:ml-3">
              <span class="my-auto md:mr-4">プレイヤー2カラー</span>
              <select id="guest2Color" class="h-10 rounded-md border-2 border-black">
                <option value="0">プレイヤーなし</option>
                {colors.map(color => (
                  <option value={ color.id }>{ color.name }</option>
                ))}
              </select>
            </div>
            <div class="flex justify-between mt-3 md:ml-3">
              <span class="my-auto md:mr-4">プレイヤー3カラー</span>
              <select id="guest3Color" class="h-10 rounded-md border-2 border-black">
                <option value="0">プレイヤーなし</option>
                {colors.map(color => (
                  <option value={ color.id }>{ color.name }</option>
                ))}
              </select>
            </div>
            <div class="flex justify-between mt-3 md:ml-3">
              <span class="my-auto md:mr-4">プレイヤー4カラー</span>
              <select id="guest4Color" class="h-10 rounded-md border-2 border-black">
                <option value="0">プレイヤーなし</option>
                {colors.map(color => (
                  <option value={ color.id }>{ color.name }</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </CustomModal>
    </Mypage>
  )
}

export default PointCount;