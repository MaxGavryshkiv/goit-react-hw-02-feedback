(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),r=n.n(o),i=n(4),s=n(5),d=n(7),b=n(6),u=n(0),l=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Good:",Object(u.jsx)("span",{children:t})]}),Object(u.jsxs)("p",{children:["Neutral:",Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("p",{children:["Bad:",Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("p",{children:["Total:",Object(u.jsx)("span",{children:a})]}),Object(u.jsxs)("p",{children:["Positive feedback:",Object(u.jsx)("span",{children:o}),"%"]})]})},j=function(e){var t=e.good,n=e.neutral,c=e.bad;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",onClick:t,children:"good"}),Object(u.jsx)("button",{type:"button",onClick:n,children:"neutral"}),Object(u.jsx)("button",{type:"button",onClick:c,children:"bad"}),Object(u.jsx)("h2",{children:"Statistic"})]})},h=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:t}),n]})},g=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0,total:0,positivePercentage:0,visible:!1},e.goodIncrement=function(){e.setState((function(e){return{good:e.good+1}})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage(),e.show()},e.neutralIncrement=function(){e.setState((function(e){return{neutral:e.neutral+1}})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage(),e.show()},e.badIncrement=function(){e.setState((function(e){return{bad:e.bad+1}})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage(),e.show()},e.countTotalFeedback=function(){e.setState((function(e){return{total:e.good+e.neutral+e.bad}}))},e.countPositiveFeedbackPercentage=function(){e.setState((function(e){return{positivePercentage:(e.good+e.neutral-e.bad)/(e.good+e.neutral+e.bad)*100}}))},e.show=function(){e.setState({visible:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(h,{title:"Please leave feedback",children:[Object(u.jsx)(j,{good:this.goodIncrement,neutral:this.neutralIncrement,bad:this.badIncrement}),this.state.visible&&Object(u.jsx)(l,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:this.state.positivePercentage})||Object(u.jsx)(g,{message:"No feedback given"})]})}}]),n}(a.a.Component);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.18e8967e.chunk.js.map