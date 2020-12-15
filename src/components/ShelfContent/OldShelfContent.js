import React from "react";
import Signin from "../../utils/InventoryPictures/signin.png";
import Signup from "../../utils/InventoryPictures/Signup.png";
import Update from "../../utils/InventoryPictures/Update.png";
import Welcome from "../../utils/InventoryPictures/Welcome.png";
import Inventory from "../../utils/InventoryPictures/Inventory.png";
import Form from "../../utils/InventoryPictures/Form.png";


function ShelfContent() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
                    <div className="col-9">
                        <img style={{maxWidth: "100%"}} alt={Welcome} src={Welcome}></img>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-9">
                        <img style={{maxWidth: "100%"}} alt={Signup} src={Signup}></img>
                    </div>
                    <div className="col-3">
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-3">
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
                    <div className="col-9">
                        <img style={{maxWidth: "100%"}} alt={Inventory} src={Inventory}></img>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-9">
                        <img style={{maxWidth: "100%"}} alt={Update} src={Update}></img>
                    </div>
                    <div className="col-3">
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
                </div>
                <br></br>
                <div className="row">
          
                    <div className="col-3">
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
                    <div className="col-9">
                        <img style={{maxWidth: "100%"}} alt={Form} src={Form}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShelfContent