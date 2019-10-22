import React, {useState} from 'react';
import PropTypes from 'utils/propTypes';
import {connect} from 'react-redux'
import bn from 'utils/bemnames';
import _ from 'lodash'
import { Breadcrumb, BreadcrumbItem ,  Dropdown, DropdownMenu, DropdownToggle , Row, Col} from 'reactstrap';
import sentStatSelector from '../selectors/sentStatSelector'
import Typography from './Typography';

const bem = bn.create('page');

const mapStateToProps=  (state) => {

  return {
    sentStats:  sentStatSelector(state.sentimentStats)  
  }



}


const mapDispatchToProps = (dispatch) => {


  return {
    
    setduration :  (durationKey) => {
        return dispatch({
          type: "SET_DURATION",
          payload: durationKey
        }) 


    },
    fetchDurationStats: (durationKey) => {

        return dispatch({

          type: "FETCH_DURATION_STAT",
          payload: durationKey

        })


    }


  }

}

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);
  console.log(restProps);
  

const [dropdown, setDropDown] = useState(false)

  return (
    <Tag className={classes} {...restProps}>
    
        <Row className={bem.e('header')}> 
        

          <Col md={7} lg={7} sm={12} xs={12}>
        {breadcrumbs && (
      
          <Breadcrumb className={bem.e('breadcrumb')}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            {breadcrumbs.length &&
              breadcrumbs.map(({ name, active }, index) => (
                <BreadcrumbItem key={index} active={active}>
                  {name}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
   

 
        )}
</Col>
<Col   md={5} lg={5} sm={12} xs={12}>
<Dropdown    style={{
    display: "flex",
    paddingRight: '1rem',
    paddingLeft: '0.75rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    marginBottom: '0.75rem',
    borderRadius: '0.25rem',
    fontSize: 18,
    textTransform: 'uppercase'
  }} isOpen={dropdown} toggle={() =>setDropDown(!dropdown)}>
   <DropdownToggle
   caret

     tag="div"
     onClick={setDropDown}
     data-toggle="dropdown"
     aria-expanded={dropdown}
   >
    { getLabelByKey(restProps.sentStats.duration, restProps.sentStats.availableDurations )  }
   </DropdownToggle>
   <DropdownMenu
       modifiers={{
        setMaxHeight: {
          enabled: true,
          order: 890,
          fn: (data) => {
            return {
              ...data,
              styles: {
                ...data.styles,
                overflow: 'auto',
                maxHeight: 100,
              },
            };
          },
        },
      }}
   >


{     
  
  
  restProps.sentStats.availableDurations.map(function(duration) {


    console.log("dashduration",restProps.sentStats.availableDurations);
      console.log("dashduration", duration);
      

    return (     <div onClick={() => {
      restProps.setduration(duration.key)
      setDropDown(!dropdown) 
      restProps.fetchDurationStats(duration.key)
           }}> {duration.label}</div>);
      } )}

   </DropdownMenu>
 </Dropdown>
 </Col>
     
      
      </Row>
      {children}
    </Tag>
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default connect(mapStateToProps, mapDispatchToProps) (Page);


function getLabelByKey(duration, availableDurations) {


  return _.findLast(availableDurations, function(item) {

    return item.key == duration
  })['label']


}