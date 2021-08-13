import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class User1 extends Component {

    componentDidMount(){
    async function fun(){
        var resp = await fetch('https://reqres.in/api/users?page=2');
        var res = await resp.json();
        console.log(res);
        var img = document.getElementsByTagName('img');
        var name = document.getElementsByClassName('name');
        var email = document.getElementsByClassName('email');
        var id = document.getElementsByClassName('id');

        for(let i = 0;i<3;i++){
            img[i].src = res.data[i].avatar;
            console.log(res.data[i].avatar);
            name[i].textContent = res.data[i].first_name+" "+res.data[i].last_name;
            email[i].textContent = res.data[i].email;
            id[i].textContent= "ID : "+res.data[i].id;

            console.log(res.data[i].first_name+" "+res.data[i].last_name);
        }
      }
      fun();
    }
  
    render() {
        return (
            <>
                <div className="container">
                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/9-image.jpg"  height='130' className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name">Card title</h5>
                            <p className="card-text email">saqib@gmail.com</p>
                            <b className="id">ID : 7</b>
                        </div>
                    </div>
                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/9-image.jpg"  height='130' className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name">Card title</h5>
                            <p className="card-text email">saqib@gmail.com</p>
                            <b className="id">ID : 7</b>
                        </div>
                    </div>
                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/9-image.jpg"  height='130' className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name">Card title</h5>
                            <p className="card-text email">saqib@gmail.com</p>
                            <b className="id">ID : 7</b>
                        </div>
                    </div>
{/*                     
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/9-image.jpg"  height='130' className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name">Card title</h5>
                            <p className="card-text email">saqib@gmail.com</p>
                            <b className="id">ID : 7</b>
                        </div>
                    </div>
                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/9-image.jpg"  height='130' className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name">Card title</h5>
                            <p className="card-text email">saqib@gmail.com</p>
                            <b className="id">ID : 7</b>
                        </div>
                    </div>

                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/9-image.jpg"  height='130' className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name">Card title</h5>
                            <p className="card-text email">saqib@gmail.com</p>
                            <b className="id">ID : 7</b>
                        </div>
                    </div> */}

                </div>
            </>
        );
    }
}

export default User1;