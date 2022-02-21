import React from 'react'

export default function User({user}) {
  return (
    <div>
        <div className="user">
            <div className="user-name">사용자명 : {user.username}</div>
            <div className="user-pass">비밀번호 : {user.password}</div>
        </div>
    </div>
  )
}
