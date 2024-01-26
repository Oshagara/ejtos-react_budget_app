import { React, useState } from 'react';

const Currency = () => {
    const [name, setName] = useState('');

    const currencytype = {
        name: name,
    };
    return (
        <div className="alert alert-primary">
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Currency $ Dollar</option>
                <option value="Dollar" name="Dollar">$ Dollar</option>
                <option value="Pound" name="Pound">Pound</option>
                <option value="Euro" name="Euro">Euro</option>
                <option value="Ruppee" name="Ruppee">Ruppee</option>
                  </select>
        </div>
    );
};
export default Currency;
