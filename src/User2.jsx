import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class User2 extends Component {
    componentDidMount(){
        async function fun(){
            var resp = await fetch('https://reqres.in/api/users?page=2');
            var res = await resp.json();
            console.log(res);
            var img = document.getElementsByTagName('img');
            var name2 = document.getElementsByClassName('name2');
            var email = document.getElementsByClassName('email');
            var id = document.getElementsByClassName('id');
    
            var j = 0;
            for(let i = 3;i<6;i++){
    
                img[j].src = res.data[i].avatar;
                name2[j].textContent = res.data[i].first_name+" "+res.data[i].last_name;
                email[j].textContent = res.data[i].email;
                id[j].textContent= "ID : "+res.data[i].id;
                // console.log(i);
                j++;
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
                        <img src="https://reqres.in/img/faces/12-image.jpg" height='130' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name2">Name</h5>
                            <p className="card-text email"></p>
                            <b className="id"></b>
                        </div>
                    </div>
                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/12-image.jpg" height='130' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name2">Name</h5>
                            <p className="card-text email"></p>
                            <b className="id"></b>
                        </div>
                    </div>

                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/12-image.jpg" height='130' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name2">Name</h5>
                            <p className="card-text email"></p>
                            <b className="id"></b>
                        </div>
                    </div>
{/*                     
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/12-image.jpg" height='130' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name2">Name</h5>
                            <p className="card-text email"></p>
                            <b className="id"></b>
                        </div>
                    </div>
                    
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/12-image.jpg" height='130' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name2">Name</h5>
                            <p className="card-text email"></p>
                            <b className="id"></b>
                        </div>
                    </div>

                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://reqres.in/img/faces/12-image.jpg" height='130' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title name2">Name</h5>
                            <p className="card-text email"></p>
                            <b className="id"></b>
                        </div>
                    </div> */}

                </div>
            </>
        );
    }
}

export default User2;