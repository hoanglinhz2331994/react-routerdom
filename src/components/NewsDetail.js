import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';

class NewsDetail extends Component {
    render() {              
        // var x=2;  
        // var y="2";
        // y = parseInt(y,20);
        // if(x===y){
        //     console.log("Bang Nhau");
            
        // }
        // console.log(typeof(y));
        //console.log('Props',this.props);
        // console.log(typeof(this.props.match.params.id));
        var dem=1;
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">Trang chi tiết Tin</h1>                
                        </div>
                        </div>          
                    </div>
                    </div>
                </header>
                {/* begin tin tuc */}      
               
                {
                    dl.map((value,key) =>{
                        if(value.id === parseInt(this.props.match.params.id)){
                            return(
                                <div className="jumbotron" key={key}>
                                    <div className="container">
                                    <img src={value.anh} className="img-fluid rong100" alt="" />
                                    <h3 className="lead text-center">{value.tieuDe}</h3>
                                    <hr className="my-2" />{value.noiDung}</div>
                                </div>
                            )                
                        }
                        else {
                            return true;
                        }
                    })
                }

                <div className="container">
                    <h4 className="card-title text-center">Tin liên quan</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            {
                                dl.map((value,key) => {
                                    if(value.id !== parseInt(this.props.match.params.id,20)){
                                        if(dem <= 4){
                                            dem++;
                                            return(
                                                <NewsRelated key={key}
                                                    tinId={value.id}
                                                    anh={value.anh}
                                                    tieuDe={value.tieuDe}
                                                    trichDan={value.trichDan}
                                                >    
                                                </NewsRelated>
                                            )
                                        }
                                    }
                                        return true;                   
                                })
                            }                                                  
                        </div>
                    </div>
                    </div>     
                </div>
            </div>
        );
    }
}

export default NewsDetail;