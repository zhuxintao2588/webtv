import React from 'react'
import {
    NavLink,
    Route
} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AllInclusiveIcon from "@material-ui/icons/AllInclusive"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import CopyrightIcon from "@material-ui/icons/Copyright"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import LocalMoviesIcon from "@material-ui/icons/LocalMovies"
import LiveTvIcon from "@material-ui/icons/LiveTv"
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HdIcon from "@material-ui/icons/Hd"
import MyLocationIcon from "@material-ui/icons/MyLocation"
import DefaultIcon from "@material-ui/icons/LiveTv"
import { withStyles } from '@material-ui/core/styles'
import blue from "@material-ui/core/colors/blue"
import config from "../../config/config"

const styles = {
    icon: {
        color: blue[600]
    },
    text: {
        color: blue[600]
    }
}

class CategoryItem extends React.Component {
    render() {
        const categoryIcons = {
            "所有频道": <AllInclusiveIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "热门节目": <WhatshotIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "热门频道": <WhatshotIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "央视频道": <CopyrightIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "中央频道": <CopyrightIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "地方频道": <LocationOnIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "卫视频道": <MyLocationIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "辽宁地区": <LocationOnIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "电影频道": <LocalMoviesIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "校内直播": <LiveTvIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "最近观看": <RestoreIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "我的收藏": <FavoriteIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            "高清频道": <HdIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />,
            default: <DefaultIcon classes={this.props.isActive ? {
                root: this.props.classes.icon
            } : {}} />
        }
        return (
            <NavLink to={`/${config.version}/list/channel/${this.props.name}`}>
                <ListItem button onClick={() => {
                    // this.props.onClick(this.props.name)
                }}>
                    <ListItemIcon>
                        {categoryIcons[this.props.name] || 
                            categoryIcons["default"]}
                    </ListItemIcon>
                    <ListItemText primary={this.props.name}
                        classes={this.props.isActive ? {
                            primary: this.props.classes.text
                        } : {}} />
                </ListItem>
            </NavLink>
        )
    }
}

const CategoryItemWithStyles = withStyles(styles)(CategoryItem)

export default ({name, onClick}) => (
    <Route path={`/${config.version}/list/channel/${name}`}
        children={({match}) => (
            <CategoryItemWithStyles name={name} isActive={match} 
                onClick={onClick}/>
        )}>
    </Route>
)