import React,{useState,useEffect} from 'react';
import { getmemberCollection } from '../api/memberApi'
import {MemberEntity} from '../model/member'
export const MemberTable = () => {
    const [data,setData] = useState<MemberEntity[]>([]);
    const arr = [1,2,3]

    useEffect(() => {
        getmemberCollection().then((getdata) => setData(getdata))
    },[data])
    return (
            <>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </>
    )
}

const MemberRow = ({ member }: { member: MemberEntity }) => (
    <tr>
      <td>
        <img src={member.avatar_url} style={{ maxWidth: "10rem" }} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
