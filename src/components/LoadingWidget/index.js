import React from 'react';
import Widget from '../Widget';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>Carregando...</h3>
      </Widget.Header>
      <Widget.Content>
        <span style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <img
            src="https://i.gifer.com/ZZ5H.gif"
            alt="carregando"
            width="50px"
            height="50px"
          />
        </span>
      </Widget.Content>
    </Widget>
  );
}
