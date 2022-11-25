import { useEffect, useRef } from 'react';
import './style.less';

export default function IndexPage() {
  let canvas = useRef();
  useEffect(() => {
    // getContext() 可以获取渲染上下文和绘画能力
    // 获取绘图上下文
    const ctx = canvas.getContext('2d');

    // 直线：
    // moveTo(x,y) 设置初始位置
    // lineTo(x,y) 绘制一条从初始位置到制定位置的直线
    // stroke() 通过线条来绘制图形轮廓，描边
    // 代码：
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 50);
    ctx.stroke();
    ctx.closePath();

    // 三角形：基于直线
    // 代码：
    ctx.beginPath();
    ctx.moveTo(90, 0);
    ctx.lineTo(130, 60);
    ctx.lineTo(60, 60);
    ctx.lineTo(90, 0);
    ctx.stroke();
    ctx.closePath();

    // 矩形：
    // strokeRect(x,y,width,height) 绘制一个矩形的边框
    // fillRect(x,y,width,height) 绘制一个填充的矩形
    // clearRect(x,y,width,height) 清除指定矩形区域,让清除部分完全透明
    // 代码：
    ctx.strokeRect(140, 0, 100, 100);
    ctx.fillRect(250, 0, 100, 100);
    ctx.clearRect(260, 10, 50, 50);

    // 圆弧和圆
    // arc(x,y,radius,startAngle,endAngle,anticlockwise) x,y为圆心坐标，radius为半径，startAngle为圆弧或圆的开始位置，endAngle为圆弧或圆的结束位置，anticlockwise是否逆时针绘制，默认false顺时针绘制
    // 代码：
    ctx.beginPath(); // 开启路径
    ctx.arc(420, 60, 50, 0, Math.PI, false);
    ctx.stroke();
    ctx.closePath(); // 闭合路径

    // 注意：在画弧的时候，arc函数中角的单位是弧度而不是角度。角度换算为弧度的表达式： 弧度 = (Math.PI/180)*角度
    // 在每次新建路径的时候，都需要开启路径和闭合路径，这样不同不路径之间才不会互相干扰。

    // 开启路经、闭合路经
    // beginPath() 开启路经
    // closePath() 闭合路经 可以省略
    // 代码：
    ctx.beginPath();
    ctx.arc(51, 160, 50, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    // fill 填充绘制的路经的内容区域，生成实心的图形
    // 代码：
    ctx.beginPath();
    ctx.arc(161, 160, 50, 0, Math.PI, false);
    ctx.fill();

    // 椭圆
    // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
    // x,y 圆心位置
    // radiusX 、 radiusY x轴和y轴的半径
    // rotation 旋转角度，以弧度表示
    // startAngle 开始绘制点
    // endAngle 结束绘制点
    // anticlockwise 是否逆时针
    // 代码：
    ctx.beginPath();
    ctx.ellipse(270, 160, 50, 25, 0, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(270, 160, 50, 25, 90, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(270, 160, 50, 25, 180, 0, Math.PI * 2);
    ctx.stroke();

    // 贝塞尔曲线：绘制复杂有规律的图形
    // 二次贝塞尔曲线
    // quadraticCurveTo(cp1x, cp1y, x, y) cp1x和cp1y是一个控制点，x和y是结束点；
    // 代码：
    ctx.beginPath();
    ctx.moveTo(330, 160); // 确定起始点
    ctx.quadraticCurveTo(355, 210, 380, 160); // 355,210坐标为控制点， 380,160坐标为结束点
    ctx.stroke();

    // 三次贝塞尔曲线：和二次的区别是有两个控制点
    // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y); cp1x,cp1y是第一个控制点， cp2x,cp2y为第二个控制点，x和y为结束点
    // 代码：
    ctx.beginPath();
    ctx.moveTo(390, 160);
    ctx.bezierCurveTo(450, 250, 430, 70, 500, 160);
    ctx.stroke();

    // 绘制样式
    // 线条的样式
    // lineWidth：设置当前绘线的粗细，默认值为 1.0
    // lineCap：设置线段端点显示的样子，可选值：butt（默认）、round、square
    // lineJoin：设置两线段链接处所显示的样子：round、bevel、miter(默认)
    // miterLimit：限制两条线相交时相交处的最大长度
    // 代码：
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.moveTo(10, 230);
    ctx.lineTo(100, 230);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.lineCap = 'butt';
    // ctx.lineJoin = 'round';
    ctx.miterLimit = 3;
    ctx.moveTo(120, 230);
    ctx.lineTo(160, 280);
    ctx.lineTo(210, 230);
    ctx.lineTo(260, 280);
    ctx.stroke();
    ctx.closePath();

    // setLineDash：设置当前虚线样式
    // getLineDash：返回当前虚线设置的样式，为一个偶数长度的数组，
    // 代码：
    ctx.setLineDash([5, 10, 20]);
    console.log(ctx.getLineDash()); // [5,10,20,5,10,20] 如果设置的长度为奇数，也会补全为偶数长度
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(270, 280);
    ctx.lineTo(500, 280);
    ctx.stroke();

    // lineDashOffset 设置虚线样式的起始偏移量
    // 代码：
    ctx.setLineDash([10, 20, 5]);
    ctx.lineDashOffset = 30; // 像左位移10像素
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(300, 350);
    ctx.stroke();

    // 透明度：1. 代透明属性的样式设置 2. 使用globalAlpha属性设置
    // 代码：
    ctx.setLineDash([]); // 恢复为实线
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.7)'; // 描边样式：透明度的样式
    ctx.strokeRect(310, 350, 50, 50);

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 255, 0, 0.2)'; // 填充样式：透明颜色
    ctx.fillRect(370, 350, 50, 50);

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.globalAlpha = 0.2; // 使用globalAlpha设置；
    ctx.arc(460, 350, 40, 0, Math.PI, false);
    ctx.fill();

    // 渐变
    // 线性渐变：createLinearGradient(x1, y1, x2, y2) 起点坐标 终点坐标
    // 添加渐变的颜色：gradient.addColorStop(offset, color) offset是颜色的偏移值 0-1
    // 代码：
    // 创建渐变
    const gradient1 = ctx.createLinearGradient(10, 400, 210, 600);
    gradient1.addColorStop(0, '#0f0');
    gradient1.addColorStop(1, '#f00');
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.fillStyle = gradient1;
    ctx.fillRect(10, 400, 200, 200);
    // 径向渐变：
  }, []);

  return (
    <div>
      <canvas ref={(e) => (canvas = e)} width="500" height="500">
        当前浏览器不支持canvas元素，请升级或更换浏览器！
      </canvas>
    </div>
  );
}
