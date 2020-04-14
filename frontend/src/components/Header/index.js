import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const { user } = useSelector(state => state.user);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber-Purple" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                user.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
