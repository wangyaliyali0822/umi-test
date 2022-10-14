import React, { useRef, useEffect } from 'react';
import { Map, MapvglView, MapvglLayer } from 'react-bmapgl';

export default function () {
    let map = useRef(null);

    useEffect(() => {
        // 自定义控件
        CustomControl.prototype = new BMapGL.Control();//继承Control的属性和方法
        CustomControl.prototype.initialize = function (map) {    // 创建一个DOM元素   
            const customDom = document.getElementById('control-id')
            // 添加DOM元素到地图中   
            map.getContainer().appendChild(customDom);
            // 将DOM元素返回  
            return customDom;
        }
        var myCtrl = new CustomControl();
        map.addControl(myCtrl);

        // 添加一个图像标注 Marker
        const point = new BMapGL.Point(108.011154, 30.928216)
        const icon = new BMapGL.Icon(
            'https://img1.baidu.com/it/u=3500124600,200769604&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            new BMapGL.Size(30, 30)
        )
        const marker = new BMapGL.Marker(point, {
            offset: new BMapGL.Size(0, 80),
            title: '测试',
            icon,
        });
        map.addOverlay(marker)

        // 添加一个信息窗口 InfoWindow
        const infoW = new BMapGL.InfoWindow(
            document.getElementById('info')
            , {
                width: 250,
                height: 100,
                title: '详情'
            });
        map.openInfoWindow(infoW, new BMapGL.Point(100.011154, 30.928216))

        // 添加一个文本标注 Label
        const label = new BMapGL.Label('一段文字', {
            offset: new BMapGL.Size(0, 100),
            position: point
        })
        label.setStyle({
            color: '#fff',
            fontSize: '16px',
            backgroundColor: 'red',
            padding: '5px',
            border: '1px solid #ddd',
            borderRadius: '5px'
        })
        label.addEventListener('mouseover', function (e) {
            console.log('进入文字区域==>', e)
        })
        map.addOverlay(label)

        // 绘制折线的地图叠加层 Polyline
        const polyline = new BMapGL.Polyline([
            new BMapGL.Point(108.011154, 30.928216),
            new BMapGL.Point(109.011154, 33.928216),
            new BMapGL.Point(107.011154, 30.928216),
            new BMapGL.Point(108.011154, 30.928216)
        ], {
            strokeColor: 'red',
            strokeWeight: '1',
            strokeOpacity: '1',
            strokeStyle: 'solid',
        })
        // map.addOverlay(polyline)

        // 绘制多边形覆盖物 Polygon
        const polygon = new BMapGL.Polygon([
            new BMapGL.Point(90.011154, 30.928216),
            new BMapGL.Point(98.011154, 29.928216),
            new BMapGL.Point(96.011154, 28.928216),
            new BMapGL.Point(90.011154, 30.928216)
        ], {
            strokeColor: 'red',
            strokeWeight: '1',
            strokeOpacity: '1',
            strokeStyle: 'solid',
        })
        // map.addOverlay(polygon)

        // 绘制圆覆盖物 Circle
        const circle = new BMapGL.Circle(
            new BMapGL.Point(39.26, 115.25),
            1000,
            {
                strokeColor: 'red',
                fillColor: '#0f0',
                strokeWeight: '1',
                fillOpacity: '0.5',
                strokeStyle: 'dashed',
            })
        map.addOverlay(circle)

    }, [])

    return (
        <div style={{ height: '80vh', border: '1px solid #0f0' }}>
            <Map
                zoom={6}
                center={{ lng: 108.011154, lat: 30.928216 }}
                enableScrollWheelZoom
                enableDoubleClickZoom
                ref={(ref) => {
                    map = ref && ref.map;
                }}
                style={{ height: '100%' }}
            >
            </Map>
            <div id="control-id" onClick={(e) => map.zoomTo(map.getZoom() + 2)}>
                自定义控件-点击更改地图级别
            </div>
            <div id="info"><a>一个信息窗口</a></div>
        </div>
    )
};

function CustomControl() {
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT; //设置控件默认位置
    this.defaultOffset = new BMapGL.Size(60, 30); //设置偏移
}
