(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return l}));var r=t(2),i=t(6),a=(t(0),t(154)),o={id:"react-beautiful-dnd",title:"React Beautiful DND",sidebar_label:"React Beautiful DND",slug:"/react-beautiful-dnd/"},s={unversionedId:"react-beautiful-dnd",id:"react-beautiful-dnd",isDocsHomePage:!1,title:"React Beautiful DND",description:"The example below integrates React Virtuoso with React Beautiful DND.",source:"@site/docs/react-beautiful-dnd.md",slug:"/react-beautiful-dnd/",permalink:"/react-beautiful-dnd/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/react-beautiful-dnd.md",version:"current",sidebar_label:"React Beautiful DND",sidebar:"someSidebar",previous:{title:"React Sortable HOC",permalink:"/react-sortable-hoc/"},next:{title:"Window Scrolling",permalink:"/window-scrolling/"}},d=[],c={rightToc:d};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The example below integrates React Virtuoso with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/atlassian/react-beautiful-dnd"}),"React Beautiful DND"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live import=react-beautiful-dnd",live:!0,import:"react-beautiful-dnd"}),"import React, { useCallback, useEffect, useState } from 'react'\nimport ReactDOM from 'react-dom'\nimport { Virtuoso } from 'react-virtuoso'\nimport { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'\n\n// Virtuoso's resize observer can this error,\n// which is caught by DnD and aborts dragging.\nwindow.addEventListener('error', (e) => {\n  if (e.message === 'ResizeObserver loop completed with undelivered notifications.' || e.message === 'ResizeObserver loop limit exceeded') {\n    e.stopImmediatePropagation()\n  }\n})\n\n// Generate our initial big data set\nconst initial = Array.from({ length: 1000 }, (_, k) => ({\n  id: `id:${k}`,\n  text: `item ${k}`,\n}))\n\nfunction reorder(list, startIndex, endIndex) {\n  const result = Array.from(list)\n  const [removed] = result.splice(startIndex, 1)\n  result.splice(endIndex, 0, removed)\n\n  return result\n}\n\nfunction Item({ provided, item, isDragging }) {\n  return (\n    <div style={{ paddingBottom: '8px' }}>\n      <div\n        {...provided.draggableProps}\n        {...provided.dragHandleProps}\n        ref={provided.innerRef}\n        style={provided.draggableProps.style}\n        className={`item ${isDragging ? 'is-dragging' : ''}`}\n      >\n        {item.text}\n      </div>\n    </div>\n  )\n}\n\nconst HeightPreservingItem = ({ children, ...props }) => {\n  const [size, setSize] = useState(0)\n  const knownSize = props['data-known-size']\n  useEffect(() => {\n    setSize((prevSize) => {\n      return knownSize == 0 ? prevSize : knownSize\n    })\n  }, [knownSize])\n  return (\n    <div\n      {...props}\n      className=\"height-preserving-container\"\n      // check styling in the style tag below\n      style={{ '--child-height': `${size}px`, }}\n    >\n      {children}\n    </div>\n  )\n}\n\nexport default function App() {\n  const [items, setItems] = useState(initial)\n\n  const onDragEnd = React.useCallback(\n    (result) => {\n      if (!result.destination) {\n        return\n      }\n      if (result.source.index === result.destination.index) {\n        return\n      }\n\n      // void setItems\n      setItems((items) => reorder(items, result.source.index, result.destination.index))\n    },\n    [setItems]\n  )\n\n  return (\n    <div style={{ padding: '1rem' }}>\n      <style>\n        {`\n          .height-preserving-container:empty {\n            min-height: calc(var(--child-height));\n            box-sizing: border-box;\n          }\n      `}\n      </style>\n      <DragDropContext onDragEnd={onDragEnd}>\n        <Droppable\n          droppableId=\"droppable\"\n          mode=\"virtual\"\n          renderClone={(provided, snapshot, rubric) => (\n            <Item provided={provided} isDragging={snapshot.isDragging} item={items[rubric.source.index]} />\n          )}\n        >\n          {(provided) => {\n            return (\n              <Virtuoso\n                components={{\n                  Item: HeightPreservingItem,\n                }}\n                scrollerRef={provided.innerRef}\n                data={items}\n                style={{ width: 300, height: 500 }}\n                itemContent={(index, item) => {\n                  return (\n                    <Draggable draggableId={item.id} index={index} key={item.id}>\n                      {(provided) => <Item provided={provided} item={item} isDragging={false} />}\n                    </Draggable>\n                  )\n                }}\n              />\n            )\n          }}\n        </Droppable>\n      </DragDropContext>\n    </div>\n  )\n}\n")))}l.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),l=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return t?i.a.createElement(g,s(s({ref:n},c),{},{components:t})):i.a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);