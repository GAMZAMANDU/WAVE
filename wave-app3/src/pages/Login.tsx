import axios from 'axios';
import React, { useState } from 'react';
import H1 from '@components/H1';

const Login = () => {
  const [form, setForm] = useState({ id: '', password: '' });

  const validateForm = (form: { id: string; password: string }) => {
    const idValid = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/.test(form.id);
    const passwordValid = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/.test(form.password);
    return idValid && passwordValid;
  };

  const handleSubmit = async (form: { id: string; password: string }) => {
    if (validateForm(form)) {
      try {
        const response = await axios.post('http://10.150.150.177:8000/login', {
          name: form.id,
          password: form.password,
        });
        alert('로그인 성공');
        localStorage.setItem('access_token', response.data.access_token);
        console.log(response);
        window.location.href = '/';
      } catch (error) {
        console.error('Login failed', error);
        alert('로그인 실패');
      }
    } else {
      alert('형식에 맞지 않습니다');
    }
  };

  const handleSignUp = async () => {
    if (validateForm(form)) {
      try {
        const response = await axios.post('http://10.150.150.177:8000/users', {
          name: form.id,
          password: form.password,
        });
        alert('회원가입 성공');
      } catch (error) {
        console.error('Sign up failed', error);
        alert('회원가입 실패');
      }
    } else {
      alert('형식에 맞지 않습니다');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <H1 content="hello. plz Login" />
      <form
        action="post"
        className="w-full max-w-sm p-8 bg-white rounded shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form); // 로그인 처리
        }}>
        <div className="mb-4">
          <input
            type="text"
            name="id"
            placeholder="id"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button onMouseDown={()=>handleSubmit} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Login
          </button>
          <button onMouseDown={()=>handleSignUp} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
