// import * as actionTypes from '../../store/reducers/product/constants'
import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getProductDetail} from '../../store/reducers/product/actions';

const Detail = (props) => {
    const {detail, getProductDetailDispatch} = props;
    console.log(detail,'---------');
    useEffect(() => {
        getProductDetailDispatch(1);
    },[])
    
  return (
      <>
      Detail
      </>
  )
}

const mapStateToProp = (state) => {
    return {
        detail: state.product.detail
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        getProductDetailDispatch(id) {
            dispatch(getProductDetail(id));
        }
    }
}


export default connect(mapStateToProp,mapDispatchToProp)(Detail);