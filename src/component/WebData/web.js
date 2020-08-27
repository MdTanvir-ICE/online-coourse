import React from 'react';
import './web.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const web = (props) => {
    const {img, title, Instructor, Price, rating, vote }=props.data;
    console.log(props);
    return (
        <div>
            <div className="col-md-3 bl">
                <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5>Instructor: {Instructor}</h5>
                    <h6>${Price}</h6>
                    <p>Rating: {rating} / 5 ({vote})</p>
                    <p className="card-text">Some quick example text to build on the card title and </p>
                    <button className="btn btn-primary" onClick={() => props.handlePrice(Price)}>ENROLL NOW</button>
                </div>
                </div>
            </div> 
        </div>
    );
};

export default web;