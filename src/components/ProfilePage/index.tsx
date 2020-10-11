import React from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
            <h1>Thayná Luiza</h1>
            <h2>@gitiranathayna</h2>

            <p>
                Developer Intern at <a href="http://locus.software/">@locus.software</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Recife, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 01 de maio de 2001
                </li>
            </ul>
            <Followage>
                <span>
                    <strong>94</strong> seguindo
                </span>
                <span>
                    <strong>100 </strong>seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;