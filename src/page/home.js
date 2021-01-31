import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@UI/Button';
import { toCamelCase } from '@util';

export default function home() {
  const [disabled, setDisabled] = useState(false);

  console.log(disabled);
  return (
    <>
      <h1>{toCamelCase('home-page')}</h1>
      <Button disabled={disabled}>
        <Link to="/login">login page</Link>
      </Button>
      <Button onClick={() => setDisabled((prev) => !prev)}>
        toggle disabled
      </Button>
    </>
  );
}
