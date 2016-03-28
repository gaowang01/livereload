
<p>理解display:box的布局</p>
<p>display: box; box-flex 是css3新添加的盒子模型属性，它可以为我们解决按比列划分，水平均分，及垂直等高等。</p>
<p><strong>一：按比例划分：</strong></p>
<p>目前box-flex 属性还没有得到firefox, Opera, chrome浏览器的完全支持，但我们可以使用它们的私有属性定义firefox(-moz-)，opera(-o-)，chrome/safari（-webkit-）。box-flex属性主要让子容器针对父容器的宽度按一定的规则进行划分。
代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;div class="test"&gt;
      &lt;p id="p1"&gt;Hello&lt;/p&gt;
      &lt;p id="p2"&gt;W3School&lt;/p&gt;
 &lt;/div&gt;
 &lt;style&gt;
   .test</span>{<span style="color: #ff0000;">
      display</span>:<span style="color: #0000ff;">-moz-box</span>;<span style="color: #ff0000;"> 
      display</span>:<span style="color: #0000ff;">-webkit-box</span>;<span style="color: #ff0000;"> 
      display</span>:<span style="color: #0000ff;">box</span>;<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;">300px</span>;
   }<span style="color: #800000;">
   #p1</span>{<span style="color: #ff0000;">
      -moz-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
      -webkit-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
      box-flex</span>:<span style="color: #0000ff;">1</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid red</span>;
   }<span style="color: #800000;">
   #p2</span>{<span style="color: #ff0000;">
      -moz-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
      -webkit-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
      box-flex</span>:<span style="color: #0000ff;">2</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid blue</span>;
   }<span style="color: #800000;">
&lt;/style&gt;</span></pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000058366-1951951968.png" alt="" /></p>

<p><strong>二：box具体的属性如下：</strong></p>
<p>box-orient | box-direction | box-align | box-pack | box-lines</p>
<p>1. box-orient;<br />  box-orient 用来确定父容器里的子容器的排列方式，是水平还是垂直，可选属性如下所示：<br />&nbsp; &nbsp;horizontal | vertical | inline-axis | block-axis | inherit<br />  <strong>一：horizontal | inline-axis</strong><br />  给box设置 horizontal 或 inline-axis 属性效果表现一致。都可以将子元素进行水平排列.<br />  如下html代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;div class="test"&gt;
       &lt;p id="p1"&gt;Hello&lt;/p&gt;
       &lt;p id="p2"&gt;W3School&lt;/p&gt;
   &lt;/div&gt;
   css代码如下：
   &lt;style&gt;
       .test</span>{<span style="color: #ff0000;">
          display</span>:<span style="color: #0000ff;">-moz-box</span>;<span style="color: #ff0000;"> 
          display</span>:<span style="color: #0000ff;">-webkit-box</span>;<span style="color: #ff0000;"> 
          display</span>:<span style="color: #0000ff;">box</span>;<span style="color: #ff0000;">
          width</span>:<span style="color: #0000ff;">300px</span>;<span style="color: #ff0000;">
          height</span>:<span style="color: #0000ff;">200px</span>;<span style="color: #ff0000;">
          -moz-box-orient</span>:<span style="color: #0000ff;">horizontal</span>;<span style="color: #ff0000;">
          -webkit-box-orient</span>:<span style="color: #0000ff;">horizontal</span>;<span style="color: #ff0000;">
          box-orient</span>:<span style="color: #0000ff;">horizontal</span>;
       }<span style="color: #800000;">
       #p1</span>{<span style="color: #ff0000;">
          -moz-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
          -webkit-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
          box-flex</span>:<span style="color: #0000ff;">1</span>;<span style="color: #ff0000;">
          border</span>:<span style="color: #0000ff;">1px solid red</span>;
       }<span style="color: #800000;">
       #p2</span>{<span style="color: #ff0000;">
          -moz-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
          -webkit-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
          box-flex</span>:<span style="color: #0000ff;">2</span>;<span style="color: #ff0000;">
          border</span>:<span style="color: #0000ff;">1px solid blue</span>;
       }<span style="color: #800000;">
    &lt;/style&gt;</span></pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000244335-356647224.png" alt="" /></p>
<p><strong>二：vertical 可以让子元素进行垂直排列;&nbsp;</strong></p>
<p>css代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;style&gt;
   *</span>{<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;">0</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;">0</span>;}<span style="color: #800000;">
   .test</span>{<span style="color: #ff0000;">
      display</span>:<span style="color: #0000ff;">-moz-box</span>;<span style="color: #ff0000;"> 
      display</span>:<span style="color: #0000ff;">-webkit-box</span>;<span style="color: #ff0000;"> 
      display</span>:<span style="color: #0000ff;">box</span>;<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;">300px</span>;<span style="color: #ff0000;">
      height</span>:<span style="color: #0000ff;">200px</span>;<span style="color: #ff0000;">
      -moz-box-orient</span>:<span style="color: #0000ff;">vertical</span>;<span style="color: #ff0000;">
      -webkit-box-orient</span>:<span style="color: #0000ff;">vertical</span>;<span style="color: #ff0000;">
      box-orient</span>:<span style="color: #0000ff;">vertical</span>;
   }<span style="color: #800000;">
   #p1</span>{<span style="color: #ff0000;">
      -moz-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
      -webkit-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
      box-flex</span>:<span style="color: #0000ff;">1</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid red</span>;
   }<span style="color: #800000;">
   #p2</span>{<span style="color: #ff0000;">
      -moz-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
      -webkit-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
      box-flex</span>:<span style="color: #0000ff;">2</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid blue</span>;
   }<span style="color: #800000;">
&lt;/style&gt;</span></pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000350163-410134506.png" alt="" /></p>
<p>三：inherit。 Inherit属性让子元素继承父元素的相关属性。<br />效果和第一种效果一样，都是水平对齐;</p>
<p><strong>2. box-direction</strong><br />  还是如下html代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="test"</span><span style="color: #0000ff;">&gt;</span>
     <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">p </span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="p1"</span><span style="color: #0000ff;">&gt;</span>Hello<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">p</span><span style="color: #0000ff;">&gt;</span>
     <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">p </span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="p2"</span><span style="color: #0000ff;">&gt;</span>W3School<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">p</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>box-direction 用来确定父容器里的子容器的排列顺序，具体的属性如下代码所示：<br />&nbsp; &nbsp;normal | reverse | inherit<br />     normal是默认值，按照HTML文档里的结构的先后顺序依次展示， 如果box-direction 设置为 normal，则结构顺序还是 id为p1元素，id为p2元素。<br />	 reverse: 表示反转。如果设置reverse反转，则结构排列顺序为 id为p2元素，id为p1元素。如下代码：<br />	 css代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;style&gt;
       *</span>{<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;">0</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;">0</span>;}<span style="color: #800000;">
       .test</span>{<span style="color: #ff0000;">
          display</span>:<span style="color: #0000ff;">-moz-box</span>;<span style="color: #ff0000;"> 
          display</span>:<span style="color: #0000ff;">-webkit-box</span>;<span style="color: #ff0000;"> 
          display</span>:<span style="color: #0000ff;">box</span>;<span style="color: #ff0000;">
          width</span>:<span style="color: #0000ff;">300px</span>;<span style="color: #ff0000;">
          height</span>:<span style="color: #0000ff;">200px</span>;<span style="color: #ff0000;">
          -moz-box-direction</span>:<span style="color: #0000ff;">reverse</span>;<span style="color: #ff0000;">
          -webkit-box-direction</span>:<span style="color: #0000ff;">reverse</span>;<span style="color: #ff0000;">
          box-direction</span>:<span style="color: #0000ff;">reverse</span>;
       }<span style="color: #800000;">
       #p1</span>{<span style="color: #ff0000;">
          -moz-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
          -webkit-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
          box-flex</span>:<span style="color: #0000ff;">1</span>;<span style="color: #ff0000;">
          border</span>:<span style="color: #0000ff;">1px solid red</span>;
       }<span style="color: #800000;">
       #p2</span>{<span style="color: #ff0000;">
          -moz-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
          -webkit-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
          box-flex</span>:<span style="color: #0000ff;">2</span>;<span style="color: #ff0000;">
          border</span>:<span style="color: #0000ff;">1px solid blue</span>;
       }<span style="color: #800000;">
    &lt;/style&gt;</span></pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000537554-765720758.png" alt="" /></p>
<p><strong>3. box-align:</strong></p>
<p>box-align 表示容器里面字容器的垂直对齐方式，可选参数如下表示：<br />   start | end | center | baseline | stretch<br />   1. 对齐方式 start：表示居顶对齐<br />   代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;style&gt;
       *</span>{<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;">0</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;">0</span>;}<span style="color: #800000;">
       .test</span>{<span style="color: #ff0000;">
          display</span>:<span style="color: #0000ff;">-moz-box</span>;<span style="color: #ff0000;"> 
          display</span>:<span style="color: #0000ff;">-webkit-box</span>;<span style="color: #ff0000;"> 
          display</span>:<span style="color: #0000ff;">box</span>;<span style="color: #ff0000;">
          width</span>:<span style="color: #0000ff;">300px</span>;<span style="color: #ff0000;">
          height</span>:<span style="color: #0000ff;">200px</span>;<span style="color: #ff0000;">
          -moz-box-align</span>:<span style="color: #0000ff;">start</span>;<span style="color: #ff0000;">
          -webkit-box-align</span>:<span style="color: #0000ff;">start</span>;<span style="color: #ff0000;">
          box-align</span>:<span style="color: #0000ff;">start</span>; 
       }<span style="color: #800000;">
       #p1</span>{<span style="color: #ff0000;">
          -moz-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
          -webkit-box-flex</span>:<span style="color: #0000ff;">1.0</span>;<span style="color: #ff0000;"> 
          box-flex</span>:<span style="color: #0000ff;">1</span>;<span style="color: #ff0000;">
          height</span>:<span style="color: #0000ff;">160px</span>;<span style="color: #ff0000;">
          border</span>:<span style="color: #0000ff;">1px solid red</span>;
       }<span style="color: #800000;">
       #p2</span>{<span style="color: #ff0000;">
          -moz-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
          -webkit-box-flex</span>:<span style="color: #0000ff;">2.0</span>;<span style="color: #ff0000;"> 
          box-flex</span>:<span style="color: #0000ff;">2</span>;<span style="color: #ff0000;">
          height</span>:<span style="color: #0000ff;">100px</span>;<span style="color: #ff0000;">
          border</span>:<span style="color: #0000ff;">1px solid blue</span>;
       }<span style="color: #800000;">
    &lt;/style&gt;</span></pre>
</div>
<p>如上 P1 高度为160px p2 为100px; 对齐方式如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000627444-1390563397.png" alt="" /></p>
<p>如果改为end的话，那么就是 居低对齐了，如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000646429-1796405417.png" alt="" /></p>
<p>center表示居中对齐，如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000700788-1781923108.png" alt="" /></p>

<p><strong>4. box-pack</strong></p>
<p>box-pack表示父容器里面子容器的水平对齐方式，可选参数如下表示：<br />&nbsp; start | end | center | justify<br />box-pack:start;  表示水平居左对齐，对于正常方向的框，首个子元素的左边缘被放在左侧（最后的子元素后是所有剩余的空间）<br />对于相反方向的框，最后子元素的右边缘被放在右侧（首个子元素前是所有剩余的空间）代码如下所示：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;style&gt;
   *</span>{<span style="color: #ff0000;">margin</span>:<span style="color: #0000ff;">0</span>;<span style="color: #ff0000;">padding</span>:<span style="color: #0000ff;">0</span>;}<span style="color: #800000;">
   .test</span>{<span style="color: #ff0000;">
      display</span>:<span style="color: #0000ff;">-moz-box</span>;<span style="color: #ff0000;"> 
      display</span>:<span style="color: #0000ff;">-webkit-box</span>;<span style="color: #ff0000;"> 
      display</span>:<span style="color: #0000ff;">box</span>;<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;">400px</span>;<span style="color: #ff0000;">
      height</span>:<span style="color: #0000ff;">120px</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid #333</span>;<span style="color: #ff0000;">
      -moz-box-pack</span>:<span style="color: #0000ff;">start</span>;<span style="color: #ff0000;">
      -webkit-box-pack</span>:<span style="color: #0000ff;">start</span>;<span style="color: #ff0000;">
      box-pack</span>:<span style="color: #0000ff;">start</span>; 
   }<span style="color: #800000;">
   #p1</span>{<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;">100px</span>;<span style="color: #ff0000;">
      height</span>:<span style="color: #0000ff;">108px</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid red</span>;  
   }<span style="color: #800000;">
   #p2</span>{<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;">100px</span>;<span style="color: #ff0000;">
      height</span>:<span style="color: #0000ff;">108px</span>;<span style="color: #ff0000;">
      border</span>:<span style="color: #0000ff;">1px solid blue</span>;
   }<span style="color: #800000;">
&lt;/style&gt;</span></pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000852929-1592088104.png" alt="" /></p>
<p><strong>box-pack:center;</strong> &nbsp;表示水平居中对齐,均等地分割多余空间，其中一半空间被置于首个子元素前，另一半被置于最后一个子元素后; 如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000914429-1481725425.png" alt="" /></p>
<p><strong>box-pack:end;</strong> 表示水平居右对齐;对于正常方向的框，最后子元素的右边缘被放在右侧（首个子元素前是所有剩余的空间）。<br />对于相反方向的框，首个子元素的左边缘被放在左侧（最后子元素后是所有剩余的空间）。如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000934647-693113289.png" alt="" /></p>
<p><strong>box-pack:Justify：</strong><br />在box-pack表示水平等分父容器宽度（在每个子元素之间分割多余的空间（首个子元素前和最后一个子元素后没有多余的空间））<br />如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204000958085-162450612.png" alt="" /></p>

<p style="background: #55895B; color: #fff; font-size: 24px; height: 40px; line-height: 40px; padding-left: 12px; font-weight: bold;">理解flex布局</p>
<p>&nbsp; &nbsp; 我们传统的布局方式是基于在盒子模型下的，依赖于display属性的，position属性的或者是float属性的，但是在传统的布局上面并不好布局; 比如我们想让某个元素垂直居中的话，我们常见的会让其元素表现为表格形式，比如display:table-cell属性什么的，我们现在来学习下使用flex布局是非常方便的;<br /><strong>目前的浏览器支持程度：</strong> IE10+，chrome21+，opera12.1+，Firefox22+，safari6.1+等;<br />如上浏览器的支持程度，我们可以把此元素使用在移动端很方便;<br />flex是什么呢？Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。<br /><strong>flex的弹性布局有如下优势：</strong><br />&nbsp; 1.独立的高度控制与对齐。<br />&nbsp; 2.独立的元素顺序。<br />&nbsp; 3.指定元素之间的关系。<br />&nbsp; 4.灵活的尺寸与对齐方式。<br /><strong>一：基本概念</strong>：<br />&nbsp; &nbsp;采用flex布局的元素，称为flex容器，它的所有子元素自动成为容器成员，称为flex项目。如下图：<br /><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204001219913-1099093913.png" alt="" /><br />容器默认存在2根轴，水平的主轴和垂直的侧轴，主轴的开始位置(与边框的交叉点)叫做main start, 结束位置叫做 main end.<br />交叉轴的开始位置叫做 cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，<br />占据的交叉轴空间叫做cross size。<br /><strong>二：容器有如下6个属性</strong><br />    flex-direction<br />    flex-wrap<br />    flex-flow<br />    justify-content<br />    align-items<br />    align-content<br />我们分别来看下上面6个属性有哪些值，分别代表什么意思。<br /><strong>1. flex-direction：</strong>该属性决定主轴的方向(即项目的排列方向)。<br />它可能有四个值：<br />row（默认值）：主轴为水平方向，起点在左端。<br />row-reverse：主轴为水平方向，起点在右端。<br />column：主轴为垂直方向，起点在上沿。<br />column-reverse：主轴为垂直方向，起点在下沿。<br />我们来做几个demo，来分别理解下上面几个值的含义;我这边只讲解上面第一个和第二个值的含义，下面的也是一样，<br />就不讲解了; 比如页面上有一个容器，里面有一个元素，看下这个元素的排列方向。<br />HTML代码：(如没有特别的说明，下面的html代码都是该结构)：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="first-face container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>css代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;style&gt;
    html, body </span>{<span style="color: #ff0000;">
        height</span>:<span style="color: #0000ff;"> 100%</span>;
    }<span style="color: #800000;">
    .container </span>{<span style="color: #ff0000;">
        width</span>:<span style="color: #0000ff;">150px</span>;<span style="color: #ff0000;">
        height</span>:<span style="color: #0000ff;">150px</span>;<span style="color: #ff0000;">
        border</span>:<span style="color: #0000ff;">1px solid red</span>;
    }<span style="color: #800000;">
    .first-face </span>{<span style="color: #ff0000;">
        display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
        display</span>:<span style="color: #0000ff;"> -webkit-flex</span>;<span style="color: #ff0000;">
        flex-direction</span>:<span style="color: #0000ff;"> row</span>;<span style="color: #ff0000;">
        -webkit-flex-direction</span>:<span style="color: #0000ff;">row</span>;<span style="color: #ff0000;">
        display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">  
        -webkit-box-pack</span>:<span style="color: #0000ff;">start</span>;
    }<span style="color: #800000;">
    .pip </span>{<span style="color: #ff0000;">
      display</span>:<span style="color: #0000ff;">block</span>;<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;"> 24px</span>;<span style="color: #ff0000;">
      height</span>:<span style="color: #0000ff;"> 24px</span>;<span style="color: #ff0000;">
      border-radius</span>:<span style="color: #0000ff;"> 50%</span>;<span style="color: #ff0000;">
      background-color</span>:<span style="color: #0000ff;"> #333</span>;
    }<span style="color: #800000;">
&lt;/style&gt;</span></pre>
</div>
<p><strong>注意：</strong>在android平台的uc浏览器和微信浏览器中使用display: flex;会出问题。不支持该属性，因此使用display: flex;的时候需要加上display: -webkit-box; 还有一些水平对齐或者垂直对齐都需要加上对应的box-pack(box-pack表示父容器里面子容器的水平对齐方式)及box-align(box-align 表示容器里面子容器的垂直对齐方式）.具体的可以看如下介绍的 display:box属性那一节。<br />我们可以看下截图如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204001348757-1939659855.png" alt="" /></p>
<p>当我们把flex-direction的值改为 row-reverse后(主轴为水平方向，起点在右端)，我们截图如下所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204001408897-1000849543.png" alt="" /></p>
<p><strong>2. flex-wrap</strong>属性 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，可以换行。<br />它有如下三个值：<br />&nbsp; &nbsp;nowrap（默认）：不换行。<br />&nbsp; &nbsp;wrap：换行，第一行在上方。<br />&nbsp; &nbsp;wrap-reverse：换行，第一行在下方。</p>
<p><strong>3. flex-flow</strong><br />该属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap</p>
<p><strong>4. justify-content属性</strong><br />justify-content属性定义了项目在主轴上的对齐方式。下面假设主轴为从左到右。<br />值为如下：<br />flex-start | flex-end | center | space-between | space-around;<br />flex-start(默认值) 左对齐<br />flex-end 右对齐<br />center 居中<br />space-between： 两端对齐，项目之间的间隔都相等<br />space-around：每个项目两侧的间隔相等。</p>
<p><strong>5. align-items属性</strong><br />align-items属性定义项目在交叉轴上如何对齐。<br />它可能取5个值：<br />flex-start：交叉轴的起点对齐。<br />flex-end：交叉轴的终点对齐。<br />center：交叉轴的中点对齐。<br />baseline: 项目的第一行文字的基线对齐。<br />stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</p>
<p><strong>6. align-content属性</strong><br />align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。<br />该属性可能取6个值。<br />flex-start：与交叉轴的起点对齐。<br />flex-end：与交叉轴的终点对齐。<br />center：与交叉轴的中点对齐。<br />space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。<br />space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。<br />stretch（默认值）：轴线占满整个交叉轴。</p>
<p><strong>三：项目的属性，以下有6个属性可以设置在项目中</strong>，<br />order<br />flex-grow<br />flex-shrink<br />flex-basis<br />flex<br />align-self<br /><strong>1. order属性</strong><br />order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。<br />基本语法：<br />.xx {order: &lt;integer&gt;;}<br /><strong>2. flex-grow属性</strong><br />flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大<br />基本语法：<br />.xx {<br />&nbsp; &nbsp;flex-grow: &lt;number&gt;; <br />}<br /><strong>3. flex-shrink属性</strong><br />flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。<br />基本语法：<br />.xx {<br />  flex-shrink: &lt;number&gt;; <br />}<br /><strong>4. flex-basis属性</strong><br />flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。<br />基本语法：</p>
<p><em id="__mceDel" style="line-height: 1.5;">.xx { flex-basis: &lt;length&gt; | auto;<em id="__mceDel">}</em></em></p>
<p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。<br /><strong>5. flex属性</strong><br />flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p>
<p><br /><strong>6. align-self属性</strong><br />align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。<br />默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p>
<p>基本语法：<br />.xx {<br />&nbsp; &nbsp; &nbsp;align-self: auto | flex-start | flex-end | center | baseline | stretch;<br />}</p>
<p>上面是基本语法，感觉好模糊啊，看到这么多介绍，感觉很迷茫啊，下面我们趁热打铁来实现下demo。<br />我们很多人会不会打麻将呢？打麻将中有1-9丙对吧，我们来分别来实现他们的布局;<br />首先我们的HTML代码还是如下(如果没有特别的说明都是这样的结构)：</p>
<p><strong>一： 1丙</strong></p>
<p><strong>HTML代码：</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="first-face container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。<br />css代码结构如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">&lt;style&gt;
    html, body </span>{<span style="color: #ff0000;">
        height</span>:<span style="color: #0000ff;"> 100%</span>;
    }<span style="color: #800000;">
    .container </span>{<span style="color: #ff0000;">
        width</span>:<span style="color: #0000ff;">150px</span>;<span style="color: #ff0000;">
        height</span>:<span style="color: #0000ff;">150px</span>;<span style="color: #ff0000;">
        border</span>:<span style="color: #0000ff;">1px solid red</span>;
    }<span style="color: #800000;">
    .first-face </span>{
        
    }<span style="color: #800000;">
    .pip </span>{<span style="color: #ff0000;">
      display</span>:<span style="color: #0000ff;">block</span>;<span style="color: #ff0000;">
      width</span>:<span style="color: #0000ff;"> 24px</span>;<span style="color: #ff0000;">
      height</span>:<span style="color: #0000ff;"> 24px</span>;<span style="color: #ff0000;">
      border-radius</span>:<span style="color: #0000ff;"> 50%</span>;<span style="color: #ff0000;">
      background-color</span>:<span style="color: #0000ff;"> #333</span>;
    }<span style="color: #800000;">
&lt;/style&gt;</span></pre>
</div>
<p>1. 首先，只有一个左上角的情况下，flex布局默认为左对齐，因此需要display:flex即可;如下代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;
}</pre>
</div>
<p>上面为了兼容UC浏览器和IOS浏览器下，因此需要加上display: -webkit-box;来兼容，我们也明白，如果不加上.first-face里面的代码，也能做出效果，因为元素默认都是向左对齐的，如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204001920897-122829691.png" alt="" /></p>
<p>我们继续来看看对元素进行居中对齐; 需要加上 justify-content: center;即可;但是在UC浏览器下不支持该属性，<br />我们水平对齐需要加上box-pack，box-pack表示父容器里面子容器的水平对齐方式，具体的值如上面介绍的box的语法，<br />需要加上 -webkit-box-pack:center; 因此在first-face里面的css代码变为如下代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">center</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204001955210-865868064.png" alt="" /></p>
<p>上面已经介绍过<br />justify-content属性定义了项目在主轴上的对齐方式(水平方向上)，有五个值，这里不再介绍，具体可以看上面的基本语法。</p>
<p>水平右对齐代码也一样、因此代码变成如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">end</span>;
}</pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002031460-1959041533.png" alt="" /></p>
<p>2. 我们接着来分别看看垂直居左对齐，垂直居中对齐，垂直居右对齐.<br /><strong>一：垂直居左对齐</strong><br />我们现在需要使用上align-items属性了，该属性定义项目在交叉轴上如何对齐。具体的语法如上：<br />同样为了兼容UC浏览器或其他不支持的浏览器，我们需要加上box-align 该属性表示容器里面字容器的垂直对齐方式;具体的语法如上;<br />因此代码变成如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">center</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002108819-1082609714.png" alt="" /></p>
<p><strong>二：垂直居中对齐</strong></p>
<p>现在垂直已经居中对齐了，但是在水平上还未居中对齐，因此在水平上居中对齐，我们需要加上justify-content属性居中即可;<br />同样为了兼容UC浏览器，需要加上 -webkit-box-pack:center;<br />代码变为如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">center</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002158897-1786663987.png" alt="" /></p>
<p><strong>三：垂直居右对齐</strong></p>
<p>原理和上面的垂直居中对齐是一个道理，只是值换了下而已;代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">end</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002249913-983680718.png" alt="" /></p>
<p>3. 我们接着来分别看看底部居左对齐，底部居中对齐，底部居右对齐.</p>
<p><strong>一：底部居左对齐</strong></p>
<p>其实属性还是用到上面的，只是值换了一下而已;代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">end</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">flex-start</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">start</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002346225-1975599300.png" alt="" /></p>
<p><strong>二：底部居中对齐</strong><br />代码变为如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">end</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">center</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002426663-1197450761.png" alt="" /></p>
<p><strong>三：底部居右对齐</strong><br />代码变为如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">end</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">end</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002503475-1101520740.png" alt="" /></p>
<p><strong>二：2丙</strong><br /><strong>1. 水平上2端对齐;</strong> 需要使用的属性justify-content: space-between;该属性能使第一个元素在左边，最后一个元素在右边。<br />因此代码变成如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
}</pre>
</div>
<p>但是在UC浏览器下不生效，因此我们需要 display: -webkit-box;和-webkit-box-pack:Justify;这两句代码;<br />display: -webkit-box;我不多介绍，上面已经讲了，-webkit-box-pack:Justify;的含义是在box-pack表示水平等分父容器宽度。<br />因此为了兼容UC浏览器，所以代码变成如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">Justify</span>;
}</pre>
</div>
<p>效果如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002614350-393067467.png" alt="" /></p>
<p><strong>2. 垂直两端对齐;</strong><br />垂直对齐需要使用到的flex-direction属性，该属性有一个值为column：主轴为垂直方向，起点在上沿。<br />代码变为如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;
}</pre>
</div>
<p>再加上justify-content: space-between;说明两端对齐.但是在UC浏览器并不支持该属性，使其不能垂直两端对齐，因此为了兼容UC浏览器，需要使用-webkit-box;因此<br />整个代码变成如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> normal</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> vertical</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">justify</span>;
}</pre>
</div>
<p>如上使用 -webkit-box-direction: normal; 使其对齐方向为水平从左端开始，-webkit-box-orient: vertical;使用这句代码告诉<br />浏览器是垂直的,-webkit-box-pack:justify;这句代码告诉浏览器垂直的两端对齐。<br />如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002723819-1345242983.png" alt="" /></p>
<p>3<strong>. 垂直居中两端对齐</strong><br />代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;"> center</span>;
}</pre>
</div>
<p>多加一句 align-items: center;代码; 表示交叉轴上居中对齐。同理在UC浏览器下不支持的，因此我们为了兼容UC浏览器，可以加上如下代码，因此整个代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">center</span>;<span style="color: #ff0000;">

    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> normal</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> vertical</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">justify</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">center</span>;
}</pre>
</div>
<p>再加上-webkit-box-align:center;这句代码，告诉浏览器垂直居中。<br />如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002856397-1374017489.png" alt="" /></p>
<p><strong>4. 垂直居右两端对齐</strong><br />代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;"> flex-end</span>;
}</pre>
</div>
<p>同理为了兼容UC浏览器，整个代码变成如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    align-items</span>:<span style="color: #0000ff;">flex-end</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> normal</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> vertical</span>;<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;">justify</span>;<span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;">end</span>;
}</pre>
</div>
<p>和上面代码一样，只是更改了一下垂直对齐方式而已;<br />如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204002947507-504272112.png" alt="" /></p>
<p><strong>注意：下面由于时间的关系，先不考虑UC浏览器的兼容</strong></p>
<p><strong>三：3丙</strong><br />代码如下：<br />HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="first-face container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
}<span style="color: #800000;">
.pip:nth-child(2) </span>{<span style="color: #ff0000;">
    align-self</span>:<span style="color: #0000ff;"> center</span>;
}<span style="color: #800000;">
.pip:nth-child(3) </span>{<span style="color: #ff0000;">
    align-self</span>:<span style="color: #0000ff;"> flex-end</span>;
}</pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204003056007-650704941.png" alt="" /></p>
<p><strong>四： 4丙</strong><br />代码如下：<br />HTML代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="first-face container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>CSS代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.column</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
 }<span style="color: #800000;">
.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
}</pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204003151225-2114732836.png" alt="" /></p>
<p><strong>五：5丙</strong><br />HTML结构如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="first-face container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>css代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.column</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
 }<span style="color: #800000;">
.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
}<span style="color: #800000;">
.first-face .column:nth-of-type(2)</span>{<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> center</span>;
}</pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204003245975-1848626994.png" alt="" /></p>
<p><strong>六：6丙</strong><br />HTML结构如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="first-face container"</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
         <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="column"</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span </span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="pip"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>css代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.column</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
 }<span style="color: #800000;">
.first-face </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> space-between</span>;
}</pre>
</div>
<p>如下图所示：</p>
<p><img src="http://images2015.cnblogs.com/blog/561794/201602/561794-20160204010450569-1968565464.png" alt="" /></p>
<p>7,8,9丙也是一个意思，这里先不做了;</p>

<p style="background: #55895B; color: #fff; font-size: 24px; height: 40px; line-height: 40px; padding-left: 12px; font-weight: bold;">Flex布局兼容知识点总结</p>
<p>假设父容器class为 box,子项目为item.<br />旧版语法如下：<br /><strong>一：定义容器的display属性。</strong><br />旧语法如下写法：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -moz-box</span>;<span style="color: #ff0000;"> 
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> box</span>;
}</pre>
</div>
<p>新版语法需要如下写：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-flex</span>;<span style="color: #ff0000;"> 
    display</span>:<span style="color: #0000ff;"> flex</span>;
}</pre>
</div>
<p>或者 行内</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-inline-flex</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;">inline-flex</span>;
}</pre>
</div>
<p><strong>二：容器属性(旧版语法)</strong><br /> 1. box-pack 属性;(水平方向上对齐方式)<br />  box-pack定义子元素主轴对齐方式。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -moz-box-pack</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;"> 
    -webkit-box-pack</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;"> 
    box-pack</span>:<span style="color: #0000ff;"> center</span>;
}</pre>
</div>
<p>box-pack属性总共有4个值：</p>
<p>.box{<br />&nbsp; &nbsp;box-pack: start | end | center | justify;<br />&nbsp; &nbsp;/*主轴对齐：左对齐（默认） | 右对齐 | 居中对齐 | 左右对齐*/<br />}</p>
<p>各个值的含义如下：<br />start:	<br />&nbsp; &nbsp;对于正常方向的框，首个子元素的左边缘被放在左侧（最后的子元素后是所有剩余的空间)<br />&nbsp; &nbsp;对于相反方向的框，最后子元素的右边缘被放在右侧（首个子元素前是所有剩余的空间）<br />end:<br />&nbsp; 对于正常方向的框，最后子元素的右边缘被放在右侧（首个子元素前是所有剩余的空间）。<br />&nbsp; 对于相反方向的框，首个子元素的左边缘被放在左侧（最后子元素后是所有剩余的空间）。<br />center:<br />&nbsp; &nbsp;均等地分割多余空间，其中一半空间被置于首个子元素前，另一半被置于最后一个子元素后.<br />justify:<br />&nbsp; &nbsp;在每个子元素之间分割多余的空间（首个子元素前和最后一个子元素后没有多余的空间）。</p>
<p><strong>2.box-align 属性(垂直方向上的对齐方式)</strong><br />box-align定义子元素交叉轴对齐方式。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -moz-box-align</span>:<span style="color: #0000ff;"> center</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Firefox</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    -webkit-box-align</span>:<span style="color: #0000ff;"> center</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Safari,Opera,Chrome</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    box-align</span>:<span style="color: #0000ff;"> center</span>;
}</pre>
</div>
<p>box-align属性总共有5个值：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    box-align</span>:<span style="color: #0000ff;"> start | end | center | baseline | stretch</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">交叉轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 文本基线对齐 | 上下对齐并铺满</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p>各个值的含义如下：<br />start:<br />&nbsp; &nbsp;对于正常方向的框，每个子元素的上边缘沿着框的顶边放置。<br />&nbsp; &nbsp;对于反方向的框，每个子元素的下边缘沿着框的底边放置。<br />end:<br />&nbsp; &nbsp;对于正常方向的框，每个子元素的下边缘沿着框的底边放置。<br />&nbsp; &nbsp;对于反方向的框，每个子元素的上边缘沿着框的顶边放置。<br />center:<br />&nbsp; &nbsp; 均等地分割多余的空间，一半位于子元素之上，另一半位于子元素之下。<br />baseline:<br />&nbsp; &nbsp; 如果 box-orient 是inline-axis或horizontal，所有子元素均与其基线对齐。<br />stretch:<br />&nbsp; &nbsp;拉伸子元素以填充包含块</p>
<p><strong>3.box-direction 属性</strong><br />box-direction定义子元素的显示方向。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -moz-box-direction</span>:<span style="color: #0000ff;"> reverse</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Firefox</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> reverse</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Safari,Opera,Chrome</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    box-direction</span>:<span style="color: #0000ff;"> reverse</span>;
}</pre>
</div>
<p>box-direction属性总共有3个值：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    box-direction</span>:<span style="color: #0000ff;"> normal | reverse | inherit</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">显示方向：默认方向 | 反方向 | 继承子元素的 box-direction</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p>4<strong>.box-orient 属性</strong></p>
<p>box-orient定义子元素是否应水平或垂直排列。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -moz-box-orient</span>:<span style="color: #0000ff;"> horizontal</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Firefox</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> horizontal</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Safari,Opera,Chrome</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    box-orient</span>:<span style="color: #0000ff;"> horizontal</span>;
}</pre>
</div>
<p>box-orient属性总共有5个值：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    box-orient</span>:<span style="color: #0000ff;"> horizontal | vertical | inline-axis | block-axis | inherit</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">排列方向：水平 | 垂直 | 行内方式排列（默认） | 块方式排列 | 继承父级的box-orient</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p>horizontal: 在水平行中从左向右排列子元素。<br />vertical: 从上向下垂直排列子元素。<br />inline-axis： 沿着行内轴来排列子元素（映射为 horizontal）。<br />block-axis： 沿着块轴来排列子元素（映射为 vertical）。<br />inherit： 应该从父元素继承 box-orient 属性的值。</p>
<p><strong>5.box-lines 属性</strong><br />box-lines定义当子元素超出了容器是否允许子元素换行。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -moz-box-lines</span>:<span style="color: #0000ff;"> multiple</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Firefox</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    -webkit-box-lines</span>:<span style="color: #0000ff;"> multiple</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Safari,Opera,Chrome</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    box-lines</span>:<span style="color: #0000ff;"> multiple</span>;
}</pre>
</div>
<p>box-lines属性总共有2个值：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    box-lines</span>:<span style="color: #0000ff;"> single | multiple</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">允许换行：不允许（默认） | 允许</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p>single：伸缩盒对象的子元素只在一行内显示<br />multiple：伸缩盒对象的子元素超出父元素的空间时换行显示 </p>
<p><strong>6.box-flex 属性。</strong><br />box-flex定义是否允许当前子元素伸缩。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    -moz-box-flex</span>:<span style="color: #0000ff;"> 1.0</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Firefox</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    -webkit-box-flex</span>:<span style="color: #0000ff;"> 1.0</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Safari,Opera,Chrome</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    box-flex</span>:<span style="color: #0000ff;"> 1.0</span>;
}</pre>
</div>
<p>box-flex属性使用一个浮点值：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    box-flex</span>:<span style="color: #0000ff;"> &lt;value&gt;</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">伸缩：&lt;一个浮点数，默认为0.0，即表示不可伸缩，大于0的值可伸缩，柔性相对&gt;</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>7.box-ordinal-group 属性</strong><br />box-ordinal-group定义子元素的显示次序，数值越小越排前。</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    -moz-box-ordinal-group</span>:<span style="color: #0000ff;"> 1</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Firefox</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    -webkit-box-ordinal-group</span>:<span style="color: #0000ff;"> 1</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">Safari,Opera,Chrome</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    box-ordinal-group</span>:<span style="color: #0000ff;"> 1</span>;
}</pre>
</div>
<p>box-direction属性使用一个整数值：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    box-ordinal-group</span>:<span style="color: #0000ff;"> &lt;integer&gt;</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">显示次序：&lt;一个整数，默认为1，数值越小越排前&gt;</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>新版语法如下：</strong></p>
<p><strong>定义容器的display属性：</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-flex</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">webkit</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>;
}

<span style="color: #008000;">/*</span><span style="color: #008000;">行内flex</span><span style="color: #008000;">*/</span><span style="color: #800000;">
.box</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-inline-flex</span>; <span style="color: #008000;">/*</span><span style="color: #008000;">webkit</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;">inline-flex</span>;
}</pre>
</div>
<p><strong>容器样式</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> row | row-reverse | column | column-reverse</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">主轴方向：左到右（默认） | 右到左 | 上到下 | 下到上</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    
    flex-wrap</span>:<span style="color: #0000ff;"> nowrap | wrap | wrap-reverse</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">换行：不换行（默认） | 换行 | 换行并第一行在下方</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex-flow</span>:<span style="color: #0000ff;"> &lt;flex-direction&gt;  &lt;flex-wrap&gt;</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">主轴方向和换行简写</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    justify-content</span>:<span style="color: #0000ff;"> flex-start | flex-end | center | space-between | space-around</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">主轴对齐方式：左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    align-items</span>:<span style="color: #0000ff;"> flex-start | flex-end | center | baseline | stretch</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">交叉轴对齐方式：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    align-content</span>:<span style="color: #0000ff;"> flex-start | flex-end | center | space-between | space-around | stretch</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">多主轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 上下平均分布</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>flex-direction值介绍如下：</strong><br />&nbsp; &nbsp; row: 默认值。灵活的项目将水平显示，正如一个行一样。<br />&nbsp; &nbsp; row-reverse: 与 row 相同，但是以相反的顺序。<br />&nbsp; &nbsp; column: 灵活的项目将垂直显示，正如一个列一样。<br />&nbsp; &nbsp; column-reverse: 与 column 相同，但是以相反的顺序。</p>
<p><strong>flex-wrap 值介绍如下:</strong><br />&nbsp; &nbsp; nowrap: flex容器为单行。该情况下flex子项可能会溢出容器。<br />&nbsp; &nbsp; wrap: flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行。<br />&nbsp; &nbsp; &nbsp;wrap-reverse： 换行并第一行在下方</p>
<p><strong>flex-flow值介绍如下(主轴方向和换行简写)：</strong><br />&nbsp; &nbsp; &lt;flex-direction&gt;: 定义弹性盒子元素的排列方向<br />&nbsp; &nbsp; &lt;flex-wrap&gt;：控制flex容器是单行或者多行。</p>
<p><strong>justify-content值介绍如下：</strong><br />&nbsp; &nbsp; flex-start: 弹性盒子元素将向行起始位置对齐。<br />&nbsp; &nbsp; flex-end: 弹性盒子元素将向行结束位置对齐。<br />&nbsp; &nbsp; center: 弹性盒子元素将向行中间位置对齐。<br />&nbsp; &nbsp; space-between: 第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，<br />                 而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等。<br />  <br />  space-around: 伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半。</p>
<p><strong>align-items值介绍如下:</strong><br />&nbsp; &nbsp;flex-start: 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。<br />&nbsp; &nbsp;flex-end: 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。<br />&nbsp; &nbsp;center: 弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。<br />&nbsp; &nbsp; baseline: 如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。<br />&nbsp; &nbsp;stretch: 如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</p>
<p><strong>align-content值介绍如下:</strong><br />&nbsp; &nbsp; flex-start: 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。<br />&nbsp; &nbsp; flex-end:  弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。<br />&nbsp; &nbsp; center: 弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。<br />&nbsp; &nbsp; space-between: 第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，<br />			剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等。<br />&nbsp; &nbsp;space-around: 各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半。<br />&nbsp; &nbsp;stretch: 各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸。</p>
<p><strong>子元素属性</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    order</span>:<span style="color: #0000ff;"> &lt;integer&gt;</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">排序：数值越小，越排前，默认为0</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex-grow</span>:<span style="color: #0000ff;"> &lt;number&gt;</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> default 0 </span><span style="color: #008000;">*/</span>
    <span style="color: #008000;">/*</span><span style="color: #008000;">放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex-shrink</span>:<span style="color: #0000ff;"> &lt;number&gt;</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> default 1 </span><span style="color: #008000;">*/</span>
    <span style="color: #008000;">/*</span><span style="color: #008000;">缩小：默认1（如果空间不足则会缩小，值为0不缩小）</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex-basis</span>:<span style="color: #0000ff;"> &lt;length&gt; | auto</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> default auto </span><span style="color: #008000;">*/</span>
    <span style="color: #008000;">/*</span><span style="color: #008000;">固定大小：默认为0，可以设置px值，也可以设置百分比大小</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex</span>:<span style="color: #0000ff;"> none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]
    </span><span style="color: #008000;">/*</span><span style="color: #008000;">flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto，</span><span style="color: #008000;">*/</span><span style="color: #0000ff;">

    align-self: auto | flex-start | flex-end | center | baseline | stretch</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">单独对齐方式：自动（默认） | 顶部对齐 | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>兼容写法</strong></p>
<p><strong>1. 首先是定义容器的 display 属性：</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-box</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> 老版本语法: Safari, iOS, Android browser, older WebKit browsers. </span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -moz-box</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> 老版本语法: Firefox (buggy) </span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -ms-flexbox</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> 混合版本语法: IE 10 </span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> -webkit-flex</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> 新版本语法: Chrome 21+ </span><span style="color: #008000;">*/</span><span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> flex</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> 新版本语法: Opera 12.1, Firefox 22+ </span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p>这里还要注意的是，如果子元素是行内元素，在很多情况下都要使用 display:block 或 display:inline-block <br />把行内子元素变成块元素（例如使用 box-flex 属性），这也是旧版语法和新版语法的区别之一。</p>
<p><strong>2. 子元素主轴对齐方式（水平居中对齐）</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
    -moz-justify-content</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
    -webkit-justify-content</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
    justify-content</span>:<span style="color: #0000ff;"> center</span>;
}</pre>
</div>
<p>兼容写法新版语法的 space-around 是不可用的：如下新版语法space-around;</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    box-pack</span>:<span style="color: #0000ff;"> start | end | center | justify</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">主轴对齐：左对齐（默认） | 右对齐 | 居中对齐 | 左右对齐</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    justify-content</span>:<span style="color: #0000ff;"> flex-start | flex-end | center | space-between | space-around</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">主轴对齐方式：左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>3. 子元素交叉轴对齐方式（垂直居中对齐）</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    box-align</span>:<span style="color: #0000ff;"> start | end | center | baseline | stretch</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">交叉轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 文本基线对齐 | 上下对齐并铺满</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    align-items</span>:<span style="color: #0000ff;"> flex-start | flex-end | center | baseline | stretch</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">交叉轴对齐方式：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>4. 子元素的显示方向。</strong></p>
<p>子元素的显示方向可通过 box-direction + box-orient + flex-direction 实现，如下代码：<br /><strong>1. 左到右(水平方向)</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> normal</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> horizontal</span>;<span style="color: #ff0000;">
    -moz-flex-direction</span>:<span style="color: #0000ff;"> row</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> row</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> row</span>;
}</pre>
</div>
<p><strong>2. 右到左(水平方向)</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;"> end</span>;<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> reverse</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> horizontal</span>;<span style="color: #ff0000;">
    -moz-flex-direction</span>:<span style="color: #0000ff;"> row-reverse</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> row-reverse</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> row-reverse</span>;
}</pre>
</div>
<p>如上代码：box 写法的 box-direction 只是改变了子元素的排序，并没有改变对齐方式，需要新增一个 box-pack 来改变对齐方式。</p>
<p><strong>3. 上到下(垂直方向上)</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> normal</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> vertical</span>;<span style="color: #ff0000;">
    -moz-flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> column</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column</span>;
}</pre>
</div>
<p><strong>4. 下到上（垂直方向上）</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.box</span>{<span style="color: #ff0000;">
    -webkit-box-pack</span>:<span style="color: #0000ff;"> end</span>;<span style="color: #ff0000;">
    -webkit-box-direction</span>:<span style="color: #0000ff;"> reverse</span>;<span style="color: #ff0000;">
    -webkit-box-orient</span>:<span style="color: #0000ff;"> vertical</span>;<span style="color: #ff0000;">
    -moz-flex-direction</span>:<span style="color: #0000ff;"> column-reverse</span>;<span style="color: #ff0000;">
    -webkit-flex-direction</span>:<span style="color: #0000ff;"> column-reverse</span>;<span style="color: #ff0000;">
    flex-direction</span>:<span style="color: #0000ff;"> column-reverse</span>;
}</pre>
</div>
<p><strong>5. 是否允许子元素伸缩</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    -webkit-box-flex</span>:<span style="color: #0000ff;"> 1.0</span>;<span style="color: #ff0000;">
    -moz-flex-grow</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    -webkit-flex-grow</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    flex-grow</span>:<span style="color: #0000ff;"> 1</span>;
}</pre>
</div>
<p>box语法中 box-flex 如果不是0就表示该子元素允许伸缩，而flex是分开的，上面 flex-grow 是允许放大（默认不允许）</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    -webkit-box-flex</span>:<span style="color: #0000ff;"> 1.0</span>;<span style="color: #ff0000;">
    -moz-flex-shrink</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    -webkit-flex-shrink</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    flex-shrink</span>:<span style="color: #0000ff;"> 1</span>;
}</pre>
</div>
<p>flex-shrink 是允许缩小（默认允许）。box-flex 默认值为0，也就是说，在默认的情况下，在两个浏览器中的表现是不一样的：<br />介绍如下：</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    box-flex</span>:<span style="color: #0000ff;"> &lt;value&gt;</span>;
    <span style="color: #008000;">/*</span><span style="color: #008000;">伸缩：&lt;一个浮点数，默认为0.0，即表示不可伸缩，大于0的值可伸缩，柔性相对&gt;</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex-grow</span>:<span style="color: #0000ff;"> &lt;number&gt;</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> default 0 </span><span style="color: #008000;">*/</span>
    <span style="color: #008000;">/*</span><span style="color: #008000;">放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）</span><span style="color: #008000;">*/</span><span style="color: #ff0000;">

    flex-shrink</span>:<span style="color: #0000ff;"> &lt;number&gt;</span>; <span style="color: #008000;">/*</span><span style="color: #008000;"> default 1 </span><span style="color: #008000;">*/</span>
    <span style="color: #008000;">/*</span><span style="color: #008000;">缩小：默认1（如果空间不足则会缩小，值为0不缩小）</span><span style="color: #008000;">*/</span>
}</pre>
</div>
<p><strong>6. 子元素的显示次序</strong></p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">.item</span>{<span style="color: #ff0000;">
    -webkit-box-ordinal-group</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    -moz-order</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    -webkit-order</span>:<span style="color: #0000ff;"> 1</span>;<span style="color: #ff0000;">
    order</span>:<span style="color: #0000ff;"> 1</span>;
}</pre>
</div>
