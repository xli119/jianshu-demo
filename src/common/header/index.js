import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,
         Button, SearchWrapper, SearchInfo, SearchInfoTitle, 
         SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import  * as actionCreators  from './store/actionCreator';
import { Link } from 'react-router-dom';
import * as loginActionCreators from '../../pages/login/store/actionCreators';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getListArea = this.getListArea.bind(this);
  }
  getListArea() {
    const { focused, list, page, mouseIn, totalPage,
      handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const pageList = [];
    const jsList = list.toJS();
    if (jsList.length) {
      for (let i = (page-1)*10; i < page * 10; i++ ) {
        pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>);
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={icon => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      );
    }
  }

  render() {
    const { focused, list, login, logout, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login? <NavItem className='right' onClick={logout}>登出</NavItem> : 
            <Link to='/login' >
              <NavItem className='right'>登录</NavItem>
            </Link>
          }
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames='slide'>
              <NavSearch className={focused? 'focused': ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
          <i className={focused? 'iconfont focused zoom': 'iconfont zoom'}>&#xe62d;</i>
          {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'><i className='iconfont'>&#xe6a4;</i>写文章</Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  };
}
  
const mapDisPatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus()); 
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let oriAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (oriAngle) {
        oriAngle = parseInt(oriAngle, 10);
      } else {
        oriAngle = 0;
      }
      spin.style.transform = `rotate(${oriAngle+360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
}
export default connect(mapStateToProps, mapDisPatchToProps)(Header);
