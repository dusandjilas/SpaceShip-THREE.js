(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ho="182",Yi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lc=0,Lo=1,Ic=2,hr=1,Uc=2,_s=3,ri=0,Yt=1,Hn=2,An=0,qi=1,ua=2,Io=3,Uo=4,Nc=5,mi=100,Fc=101,Oc=102,Bc=103,zc=104,kc=200,Hc=201,Vc=202,Gc=203,fa=204,da=205,Wc=206,Xc=207,Yc=208,qc=209,Zc=210,Kc=211,jc=212,$c=213,Jc=214,pa=0,ma=1,_a=2,$i=3,ga=4,xa=5,va=6,Ma=7,Ul=0,Qc=1,eh=2,wn=0,Nl=1,Fl=2,Ol=3,uo=4,Bl=5,zl=6,kl=7,Hl=300,xi=301,Ji=302,Sa=303,Ea=304,Mr=306,ya=1e3,vn=1001,ba=1002,Lt=1003,th=1004,Vs=1005,yt=1006,Lr=1007,ni=1008,Jt=1009,Vl=1010,Gl=1011,ys=1012,fo=1013,Rn=1014,Qt=1015,It=1016,po=1017,mo=1018,bs=1020,Wl=35902,Xl=35899,Yl=1021,ql=1022,Dt=1023,Wn=1026,gi=1027,Gi=1028,_o=1029,gn=1030,go=1031,xo=1033,ur=33776,fr=33777,dr=33778,pr=33779,Ta=35840,Aa=35841,wa=35842,Ca=35843,Ra=36196,Pa=37492,Da=37496,La=37488,Ia=37489,Ua=37490,Na=37491,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,Ya=37818,qa=37819,Za=37820,Ka=37821,ja=36492,$a=36494,Ja=36495,Qa=36283,eo=36284,to=36285,no=36286,nh=3200,Zl=0,ih=1,ti="",jt="srgb",$t="srgb-linear",gr="linear",ft="srgb",Ai=7680,No=519,sh=512,rh=513,ah=514,vo=515,oh=516,lh=517,Mo=518,ch=519,Fo=35044,Oo="300 es",Tn=2e3,xr=2001;function Kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){const i=Ts("canvas");return i.style.display="block",i}const Bo={};function zo(...i){const e="THREE."+i.shift();console.log(e,...i)}function We(...i){const e="THREE."+i.shift();console.warn(e,...i)}function lt(...i){const e="THREE."+i.shift();console.error(e,...i)}function As(...i){const e=i.join(" ");e in Bo||(Bo[e]=!0,We(...i))}function uh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const vs=Math.PI/180,ws=180/Math.PI;function ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function So(i,e){return(i%e+e)%e}function fh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ms(i,e,t){return(1-t)*i+t*e}function ph(i,e,t,n){return Ms(i,e,1-Math.exp(-t*n))}function mh(i,e=1){return e-Math.abs(So(i,e*2)-e)}function _h(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vh(i,e){return i+Math.random()*(e-i)}function Mh(i){return i*(.5-Math.random())}function Sh(i){i!==void 0&&(ko=i);let e=ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eh(i){return i*vs}function yh(i){return i*ws}function bh(i){return(i&i-1)===0&&i!==0}function Th(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),m=a((e-n)/2),_=r((n-e)/2),S=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*m,o*l);break;case"YZY":i.set(c*m,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*m,o*u,o*l);break;case"XZX":i.set(o*u,c*S,c*_,o*l);break;case"YXY":i.set(c*_,o*u,c*S,o*l);break;case"ZYZ":i.set(c*S,c*_,o*u,o*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jl={DEG2RAD:vs,RAD2DEG:ws,generateUUID:ns,clamp:Je,euclideanModulo:So,mapLinear:fh,inverseLerp:dh,lerp:Ms,damp:ph,pingpong:mh,smoothstep:_h,smootherstep:gh,randInt:xh,randFloat:vh,randFloatSpread:Mh,seededRandom:Sh,degToRad:Eh,radToDeg:yh,isPowerOfTwo:bh,ceilPowerOfTwo:Th,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:wh,normalize:Ht,denormalize:Hi};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],m=r[a+0],_=r[a+1],S=r[a+2],E=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=m,e[t+1]=_,e[t+2]=S,e[t+3]=E;return}if(h!==E||c!==m||l!==_||u!==S){let g=c*m+l*_+u*S+h*E;g<0&&(m=-m,_=-_,S=-S,E=-E,g=-g);let p=1-o;if(g<.9995){const L=Math.acos(g),P=Math.sin(L);p=Math.sin(p*L)/P,o=Math.sin(o*L)/P,c=c*p+m*o,l=l*p+_*o,u=u*p+S*o,h=h*p+E*o}else{c=c*p+m*o,l=l*p+_*o,u=u*p+S*o,h=h*p+E*o;const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],m=r[a+1],_=r[a+2],S=r[a+3];return e[t]=o*S+u*h+c*_-l*m,e[t+1]=c*S+u*m+l*h-o*_,e[t+2]=l*S+u*_+o*m-c*h,e[t+3]=u*S-o*h-c*m-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),m=c(n/2),_=c(s/2),S=c(r/2);switch(a){case"XYZ":this._x=m*u*h+l*_*S,this._y=l*_*h-m*u*S,this._z=l*u*S+m*_*h,this._w=l*u*h-m*_*S;break;case"YXZ":this._x=m*u*h+l*_*S,this._y=l*_*h-m*u*S,this._z=l*u*S-m*_*h,this._w=l*u*h+m*_*S;break;case"ZXY":this._x=m*u*h-l*_*S,this._y=l*_*h+m*u*S,this._z=l*u*S+m*_*h,this._w=l*u*h-m*_*S;break;case"ZYX":this._x=m*u*h-l*_*S,this._y=l*_*h+m*u*S,this._z=l*u*S-m*_*h,this._w=l*u*h+m*_*S;break;case"YZX":this._x=m*u*h+l*_*S,this._y=l*_*h+m*u*S,this._z=l*u*S-m*_*h,this._w=l*u*h-m*_*S;break;case"XZY":this._x=m*u*h-l*_*S,this._y=l*_*h-m*u*S,this._z=l*u*S+m*_*h,this._w=l*u*h+m*_*S;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],m=n+o+h;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(u-c)*_,this._y=(r-l)*_,this._z=(a-s)*_}else if(n>o&&n>h){const _=2*Math.sqrt(1+n-o-h);this._w=(u-c)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+l)/_}else if(o>h){const _=2*Math.sqrt(1+o-n-h);this._w=(r-l)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+h-n-o);this._w=(a-s)/_,this._x=(r+l)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new z,Ho=new vi;class Ke{constructor(e,t,n,s,r,a,o,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],m=n[2],_=n[5],S=n[8],E=s[0],g=s[3],p=s[6],L=s[1],P=s[4],w=s[7],I=s[2],U=s[5],N=s[8];return r[0]=a*E+o*L+c*I,r[3]=a*g+o*P+c*U,r[6]=a*p+o*w+c*N,r[1]=l*E+u*L+h*I,r[4]=l*g+u*P+h*U,r[7]=l*p+u*w+h*N,r[2]=m*E+_*L+S*I,r[5]=m*g+_*P+S*U,r[8]=m*p+_*w+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,m=o*c-u*r,_=l*r-a*c,S=t*h+n*m+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=h*E,e[1]=(s*l-u*n)*E,e[2]=(o*n-s*a)*E,e[3]=m*E,e[4]=(u*t-s*c)*E,e[5]=(s*r-o*t)*E,e[6]=_*E,e[7]=(n*c-l*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Ke,Vo=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const i={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$t]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:Vo,fromXYZ:Go,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Vo,fromXYZ:Go,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const at=Ch();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class Rh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Ts("canvas")),wi.width=e.width,wi.height=e.height;const s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nr(s[a].image)):r.push(Nr(s[a]))}else r=Nr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Dh=0;const Fr=new z;class Bt extends Mi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=vn,s=vn,r=yt,a=ni,o=Dt,c=Jt,l=Bt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ns(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Hl;Bt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],m=c[1],_=c[5],S=c[9],E=c[2],g=c[6],p=c[10];if(Math.abs(u-m)<.01&&Math.abs(h-E)<.01&&Math.abs(S-g)<.01){if(Math.abs(u+m)<.1&&Math.abs(h+E)<.1&&Math.abs(S+g)<.1&&Math.abs(l+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,w=(_+1)/2,I=(p+1)/2,U=(u+m)/4,N=(h+E)/4,V=(S+g)/4;return P>w&&P>I?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=U/n,r=N/n):w>I?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=U/s,r=V/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=N/r,s=V/r),this.set(n,s,r,t),this}let L=Math.sqrt((g-S)*(g-S)+(h-E)*(h-E)+(m-u)*(m-u));return Math.abs(L)<.001&&(L=1),this.x=(g-S)/L,this.y=(h-E)/L,this.z=(m-u)/L,this.w=Math.acos((l+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lh extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Bt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qt extends Lh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $l extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Ws.subVectors(this.max,hs),Ci.subVectors(e.a,hs),Ri.subVectors(e.b,hs),Pi.subVectors(e.c,hs),qn.subVectors(Ri,Ci),Zn.subVectors(Pi,Ri),ci.subVectors(Ci,Pi);let t=[0,-qn.z,qn.y,0,-Zn.z,Zn.y,0,-ci.z,ci.y,qn.z,0,-qn.x,Zn.z,0,-Zn.x,ci.z,0,-ci.x,-qn.y,qn.x,0,-Zn.y,Zn.x,0,-ci.y,ci.x,0];return!Or(t,Ci,Ri,Pi,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,Ci,Ri,Pi,Ws))?!1:(Xs.crossVectors(qn,Zn),t=[Xs.x,Xs.y,Xs.z],Or(t,Ci,Ri,Pi,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new z,new z,new z,new z,new z,new z,new z,new z],fn=new z,Gs=new Ps,Ci=new z,Ri=new z,Pi=new z,qn=new z,Zn=new z,ci=new z,hs=new z,Ws=new z,Xs=new z,hi=new z;function Or(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);const o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Uh=new Ps,us=new z,Br=new z;class yo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Br)),this.expandByPoint(us.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new z,zr=new z,Ys=new z,Kn=new z,kr=new z,qs=new z,Hr=new z;class Jl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zr.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Kn.dot(this.direction),c=-Kn.dot(Ys),l=Kn.lengthSq(),u=Math.abs(1-a*a);let h,m,_,S;if(u>0)if(h=a*c-o,m=a*o-c,S=r*u,h>=0)if(m>=-S)if(m<=S){const E=1/u;h*=E,m*=E,_=h*(h+a*m+2*o)+m*(a*h+m+2*c)+l}else m=r,h=Math.max(0,-(a*m+o)),_=-h*h+m*(m+2*c)+l;else m=-r,h=Math.max(0,-(a*m+o)),_=-h*h+m*(m+2*c)+l;else m<=-S?(h=Math.max(0,-(-a*r+o)),m=h>0?-r:Math.min(Math.max(-r,-c),r),_=-h*h+m*(m+2*c)+l):m<=S?(h=0,m=Math.min(Math.max(-r,-c),r),_=m*(m+2*c)+l):(h=Math.max(0,-(a*r+o)),m=h>0?r:Math.min(Math.max(-r,-c),r),_=-h*h+m*(m+2*c)+l);else m=a>0?-r:r,h=Math.max(0,-(a*m+o)),_=-h*h+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(zr).addScaledVector(Ys,m),_}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,m=this.origin;return l>=0?(n=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(n=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),u>=0?(r=(e.min.y-m.y)*u,a=(e.max.y-m.y)*u):(r=(e.max.y-m.y)*u,a=(e.min.y-m.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-m.z)*h,c=(e.max.z-m.z)*h):(o=(e.max.z-m.z)*h,c=(e.min.z-m.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,s,r){kr.subVectors(t,e),qs.subVectors(n,e),Hr.crossVectors(kr,qs);let a=this.direction.dot(Hr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(qs.crossVectors(Kn,qs));if(c<0)return null;const l=o*this.direction.dot(kr.cross(Kn));if(l<0||c+l>a)return null;const u=-o*Kn.dot(Hr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,s,r,a,o,c,l,u,h,m,_,S,E,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,m,_,S,E,g)}set(e,t,n,s,r,a,o,c,l,u,h,m,_,S,E,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=m,p[3]=_,p[7]=S,p[11]=E,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const m=a*u,_=a*h,S=o*u,E=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=_+S*l,t[5]=m-E*l,t[9]=-o*c,t[2]=E-m*l,t[6]=S+_*l,t[10]=a*c}else if(e.order==="YXZ"){const m=c*u,_=c*h,S=l*u,E=l*h;t[0]=m+E*o,t[4]=S*o-_,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=_*o-S,t[6]=E+m*o,t[10]=a*c}else if(e.order==="ZXY"){const m=c*u,_=c*h,S=l*u,E=l*h;t[0]=m-E*o,t[4]=-a*h,t[8]=S+_*o,t[1]=_+S*o,t[5]=a*u,t[9]=E-m*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const m=a*u,_=a*h,S=o*u,E=o*h;t[0]=c*u,t[4]=S*l-_,t[8]=m*l+E,t[1]=c*h,t[5]=E*l+m,t[9]=_*l-S,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,_=a*l,S=o*c,E=o*l;t[0]=c*u,t[4]=E-m*h,t[8]=S*h+_,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=_*h+S,t[10]=m-E*h}else if(e.order==="XZY"){const m=a*c,_=a*l,S=o*c,E=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=m*h+E,t[5]=a*u,t[9]=_*h-S,t[2]=S*h-_,t[6]=o*u,t[10]=E*h+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Fh)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),jn.crossVectors(n,Zt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),jn.crossVectors(n,Zt)),jn.normalize(),Zs.crossVectors(Zt,jn),s[0]=jn.x,s[4]=Zs.x,s[8]=Zt.x,s[1]=jn.y,s[5]=Zs.y,s[9]=Zt.y,s[2]=jn.z,s[6]=Zs.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],m=n[9],_=n[13],S=n[2],E=n[6],g=n[10],p=n[14],L=n[3],P=n[7],w=n[11],I=n[15],U=s[0],N=s[4],V=s[8],v=s[12],y=s[1],B=s[5],G=s[9],X=s[13],ee=s[2],te=s[6],$=s[10],Z=s[14],ce=s[3],xe=s[7],_e=s[11],ye=s[15];return r[0]=a*U+o*y+c*ee+l*ce,r[4]=a*N+o*B+c*te+l*xe,r[8]=a*V+o*G+c*$+l*_e,r[12]=a*v+o*X+c*Z+l*ye,r[1]=u*U+h*y+m*ee+_*ce,r[5]=u*N+h*B+m*te+_*xe,r[9]=u*V+h*G+m*$+_*_e,r[13]=u*v+h*X+m*Z+_*ye,r[2]=S*U+E*y+g*ee+p*ce,r[6]=S*N+E*B+g*te+p*xe,r[10]=S*V+E*G+g*$+p*_e,r[14]=S*v+E*X+g*Z+p*ye,r[3]=L*U+P*y+w*ee+I*ce,r[7]=L*N+P*B+w*te+I*xe,r[11]=L*V+P*G+w*$+I*_e,r[15]=L*v+P*X+w*Z+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],m=e[10],_=e[14],S=e[3],E=e[7],g=e[11],p=e[15],L=c*_-l*m,P=o*_-l*h,w=o*m-c*h,I=a*_-l*u,U=a*m-c*u,N=a*h-o*u;return t*(E*L-g*P+p*w)-n*(S*L-g*I+p*U)+s*(S*P-E*I+p*N)-r*(S*w-E*U+g*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],m=e[10],_=e[11],S=e[12],E=e[13],g=e[14],p=e[15],L=h*g*l-E*m*l+E*c*_-o*g*_-h*c*p+o*m*p,P=S*m*l-u*g*l-S*c*_+a*g*_+u*c*p-a*m*p,w=u*E*l-S*h*l+S*o*_-a*E*_-u*o*p+a*h*p,I=S*h*c-u*E*c-S*o*m+a*E*m+u*o*g-a*h*g,U=t*L+n*P+s*w+r*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=L*N,e[1]=(E*m*r-h*g*r-E*s*_+n*g*_+h*s*p-n*m*p)*N,e[2]=(o*g*r-E*c*r+E*s*l-n*g*l-o*s*p+n*c*p)*N,e[3]=(h*c*r-o*m*r-h*s*l+n*m*l+o*s*_-n*c*_)*N,e[4]=P*N,e[5]=(u*g*r-S*m*r+S*s*_-t*g*_-u*s*p+t*m*p)*N,e[6]=(S*c*r-a*g*r-S*s*l+t*g*l+a*s*p-t*c*p)*N,e[7]=(a*m*r-u*c*r+u*s*l-t*m*l-a*s*_+t*c*_)*N,e[8]=w*N,e[9]=(S*h*r-u*E*r-S*n*_+t*E*_+u*n*p-t*h*p)*N,e[10]=(a*E*r-S*o*r+S*n*l-t*E*l-a*n*p+t*o*p)*N,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*_-t*o*_)*N,e[12]=I*N,e[13]=(u*E*s-S*h*s+S*n*m-t*E*m-u*n*g+t*h*g)*N,e[14]=(S*o*s-a*E*s-S*n*c+t*E*c+a*n*g-t*o*g)*N,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*m+t*o*m)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,m=r*l,_=r*u,S=r*h,E=a*u,g=a*h,p=o*h,L=c*l,P=c*u,w=c*h,I=n.x,U=n.y,N=n.z;return s[0]=(1-(E+p))*I,s[1]=(_+w)*I,s[2]=(S-P)*I,s[3]=0,s[4]=(_-w)*U,s[5]=(1-(m+p))*U,s[6]=(g+L)*U,s[7]=0,s[8]=(S+P)*N,s[9]=(g-L)*N,s[10]=(1-(m+E))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),dn.copy(this);const l=1/r,u=1/a,h=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Tn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),m=(t+e)/(t-e),_=(n+s)/(n-s);let S,E;if(c)S=r/(a-r),E=a*r/(a-r);else if(o===Tn)S=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===xr)S=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Tn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),m=-(t+e)/(t-e),_=-(n+s)/(n-s);let S,E;if(c)S=1/(a-r),E=a/(a-r);else if(o===Tn)S=-2/(a-r),E=-(a+r)/(a-r);else if(o===xr)S=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=h,l[9]=0,l[13]=_,l[2]=0,l[6]=0,l[10]=S,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new z,dn=new Et,Nh=new z(0,0,0),Fh=new z(1,1,1),jn=new z,Zs=new z,Zt=new z,Wo=new Et,Xo=new vi;class Pn{constructor(e=0,t=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],m=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oh=0;const Yo=new z,Li=new vi,On=new Et,Ks=new z,fs=new z,Bh=new z,zh=new vi,qo=new z(1,0,0),Zo=new z(0,1,0),Ko=new z(0,0,1),jo={type:"added"},kh={type:"removed"},Ii={type:"childadded",child:null},Vr={type:"childremoved",child:null};class zt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new z,t=new Pn,n=new vi,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return Yo.copy(e).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(fs,Ks,this.up):On.lookAt(Ks,fs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(On),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jo),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kh),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jo),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),m=a(e.skeletons),_=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new z,Bn=new z,Gr=new z,zn=new z,Ui=new z,Ni=new z,$o=new z,Wr=new z,Xr=new z,Yr=new z,qr=new St,Zr=new St,Kr=new St;class xn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Bn.subVectors(n,t),Gr.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Bn),c=pn.dot(Gr),l=Bn.dot(Bn),u=Bn.dot(Gr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const m=1/h,_=(l*c-o*u)*m,S=(a*u-o*c)*m;return r.set(1-_-S,S,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return qr.setScalar(0),Zr.setScalar(0),Kr.setScalar(0),qr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,n),Kr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qr,r.x),a.addScaledVector(Zr,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Bn.subVectors(e,t),pn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),pn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),Wr.subVectors(e,n);const c=Ui.dot(Wr),l=Ni.dot(Wr);if(c<=0&&l<=0)return t.copy(n);Xr.subVectors(e,s);const u=Ui.dot(Xr),h=Ni.dot(Xr);if(u>=0&&h<=u)return t.copy(s);const m=c*h-u*l;if(m<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ui,a);Yr.subVectors(e,r);const _=Ui.dot(Yr),S=Ni.dot(Yr);if(S>=0&&_<=S)return t.copy(r);const E=_*l-c*S;if(E<=0&&l>=0&&S<=0)return o=l/(l-S),t.copy(n).addScaledVector(Ni,o);const g=u*S-_*h;if(g<=0&&h-u>=0&&_-S>=0)return $o.subVectors(r,s),o=(h-u)/(h-u+(_-S)),t.copy(s).addScaledVector($o,o);const p=1/(g+E+m);return a=E*p,o=m*p,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},js={h:0,s:0,l:0};function jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=So(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jr(a,r,e+1/3),this.g=jr(a,r,e),this.b=jr(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=Ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return at.workingToColorSpace(Ft.copy(this),e),Math.round(Je(Ft.r*255,0,255))*65536+Math.round(Je(Ft.g*255,0,255))*256+Math.round(Je(Ft.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=jt){at.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(js);const n=Ms($n.h,js.h,t),s=Ms($n.s,js.s,t),r=Ms($n.l,js.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new tt;tt.NAMES=Ql;let Hh=0;class Ds extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=qi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class To extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=Vh();function Vh(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Gh(i){Math.abs(i)>65504&&We("DataUtils.toHalfFloat(): Value out of range."),i=Je(i,-65504,65504),Vn.floatView[0]=i;const e=Vn.uint32View[0],t=e>>23&511;return Vn.baseTable[t]+((e&8388607)>>Vn.shiftTable[t])}function Wh(i){const e=i>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[e]+(i&1023)]+Vn.exponentTable[e],Vn.floatView[0]}class Jo{static toHalfFloat(e){return Gh(e)}static fromHalfFloat(e){return Wh(e)}}const bt=new z,$s=new Fe;let Xh=0;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}}class ec extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tc extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yh=0;const sn=new Et,$r=new zt,Fi=new z,Kt=new Ps,ds=new Ps,Pt=new z;class ln extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?tc:ec)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Kt.min,ds.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,ds.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(ds.min),Kt.expandByPoint(ds.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pt.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(e,l),Pt.add(Fi)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<n.count;V++)o[V]=new z,c[V]=new z;const l=new z,u=new z,h=new z,m=new Fe,_=new Fe,S=new Fe,E=new z,g=new z;function p(V,v,y){l.fromBufferAttribute(n,V),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,v),S.fromBufferAttribute(r,y),u.sub(l),h.sub(l),_.sub(m),S.sub(m);const B=1/(_.x*S.y-S.x*_.y);isFinite(B)&&(E.copy(u).multiplyScalar(S.y).addScaledVector(h,-_.y).multiplyScalar(B),g.copy(h).multiplyScalar(_.x).addScaledVector(u,-S.x).multiplyScalar(B),o[V].add(E),o[v].add(E),o[y].add(E),c[V].add(g),c[v].add(g),c[y].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,v=L.length;V<v;++V){const y=L[V],B=y.start,G=y.count;for(let X=B,ee=B+G;X<ee;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const P=new z,w=new z,I=new z,U=new z;function N(V){I.fromBufferAttribute(s,V),U.copy(I);const v=o[V];P.copy(v),P.sub(I.multiplyScalar(I.dot(v))).normalize(),w.crossVectors(U,v);const B=w.dot(c[V])<0?-1:1;a.setXYZW(V,P.x,P.y,P.z,B)}for(let V=0,v=L.length;V<v;++V){const y=L[V],B=y.start,G=y.count;for(let X=B,ee=B+G;X<ee;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),E=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,S),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,_=t.count;m<_;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,m=new l.constructor(c.length*u);let _=0,S=0;for(let E=0,g=c.length;E<g;E++){o.isInterleavedBufferAttribute?_=c[E]*o.data.stride+o.offset:_=c[E]*u;for(let p=0;p<u;p++)m[S++]=l[_++]}return new Cn(m,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const m=l[u],_=e(m,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,m=l.length;h<m;h++){const _=l[h];u.push(_.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let m=0,_=h.length;m<_;m++)u.push(h[m].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new Et,ui=new Jl,Js=new yo,el=new z,Qs=new z,er=new z,tr=new z,Jr=new z,nr=new z,tl=new z,ir=new z;class Tt extends zt{constructor(e=new ln,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Jr.fromBufferAttribute(h,e),a?nr.addScaledVector(Jr,u):nr.addScaledVector(Jr.sub(t),u))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Js.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Js,el)===null||ui.origin.distanceToSquared(el)>(e.far-e.near)**2))&&(Qo.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,m=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,E=m.length;S<E;S++){const g=m[S],p=a[g.materialIndex],L=Math.max(g.start,_.start),P=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let w=L,I=P;w<I;w+=3){const U=o.getX(w),N=o.getX(w+1),V=o.getX(w+2);s=sr(this,p,e,n,l,u,h,U,N,V),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const S=Math.max(0,_.start),E=Math.min(o.count,_.start+_.count);for(let g=S,p=E;g<p;g+=3){const L=o.getX(g),P=o.getX(g+1),w=o.getX(g+2);s=sr(this,a,e,n,l,u,h,L,P,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,E=m.length;S<E;S++){const g=m[S],p=a[g.materialIndex],L=Math.max(g.start,_.start),P=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let w=L,I=P;w<I;w+=3){const U=w,N=w+1,V=w+2;s=sr(this,p,e,n,l,u,h,U,N,V),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const S=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let g=S,p=E;g<p;g+=3){const L=g,P=g+1,w=g+2;s=sr(this,a,e,n,l,u,h,L,P,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function qh(i,e,t,n,s,r,a,o){let c;if(e.side===Yt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ri,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:i}}function sr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Qs),i.getVertexPosition(c,er),i.getVertexPosition(l,tr);const u=qh(i,e,t,n,Qs,er,tr,tl);if(u){const h=new z;xn.getBarycoord(tl,Qs,er,tr,h),s&&(u.uv=xn.getInterpolatedAttribute(s,o,c,l,h,new Fe)),r&&(u.uv1=xn.getInterpolatedAttribute(r,o,c,l,h,new Fe)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a:o,b:c,c:l,normal:new z,materialIndex:0};xn.getNormal(Qs,er,tr,m.normal),u.face=m,u.barycoord=h}return u}class Si extends ln{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let m=0,_=0;S("z","y","x",-1,-1,n,t,e,a,r,0),S("z","y","x",1,-1,n,t,-e,a,r,1),S("x","z","y",1,1,e,n,t,s,a,2),S("x","z","y",1,-1,e,n,-t,s,a,3),S("x","y","z",1,-1,e,t,n,s,r,4),S("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function S(E,g,p,L,P,w,I,U,N,V,v){const y=w/N,B=I/V,G=w/2,X=I/2,ee=U/2,te=N+1,$=V+1;let Z=0,ce=0;const xe=new z;for(let _e=0;_e<$;_e++){const ye=_e*B-X;for(let Be=0;Be<te;Be++){const ke=Be*y-G;xe[E]=ke*L,xe[g]=ye*P,xe[p]=ee,l.push(xe.x,xe.y,xe.z),xe[E]=0,xe[g]=0,xe[p]=U>0?1:-1,u.push(xe.x,xe.y,xe.z),h.push(Be/N),h.push(1-_e/V),Z+=1}}for(let _e=0;_e<V;_e++)for(let ye=0;ye<N;ye++){const Be=m+ye+te*_e,ke=m+ye+te*(_e+1),ht=m+(ye+1)+te*(_e+1),it=m+(ye+1)+te*_e;c.push(Be,ke,it),c.push(ke,ht,it),ce+=6}o.addGroup(_,ce,v),_+=ce,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Qi(i[t]);for(const s in n)e[s]=n[s]}return e}function Zh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const vr={clone:Qi,merge:Vt};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ic extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new z,nl=new Fe,il=new Fe;class rn extends ic{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,nl,il),t.subVectors(il,nl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class $h extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const r=new rn(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const a=new rn(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const o=new rn(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const c=new rn(Oi,Bi,e,t);c.layers=this.layers,this.add(c);const l=new rn(Oi,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,m,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class sc extends Bt{constructor(e=[],t=xi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rc extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Si(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:An});r.uniforms.tEquirect.value=t;const a=new Tt(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=yt),new $h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Wi extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jh={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,n),p=this._getHandJoint(l,E);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],m=u.position.distanceTo(h.position),_=.02,S=.005;l.inputState.pinching&&m>_+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=_-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qh extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ac extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Lt,u=Lt,h,m){super(null,a,o,c,l,u,s,r,h,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ea=new z,eu=new z,tu=new Ke;class ei{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ea.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tu.getNormalMatrix(e),s=this.coplanarPoint(ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new yo,nu=new Fe(.5,.5),rr=new z;class Ao{constructor(e=new ei,t=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],m=r[6],_=r[7],S=r[8],E=r[9],g=r[10],p=r[11],L=r[12],P=r[13],w=r[14],I=r[15];if(s[0].setComponents(l-a,_-u,p-S,I-L).normalize(),s[1].setComponents(l+a,_+u,p+S,I+L).normalize(),s[2].setComponents(l+o,_+h,p+E,I+P).normalize(),s[3].setComponents(l-o,_-h,p-E,I-P).normalize(),n)s[4].setComponents(c,m,g,w).normalize(),s[5].setComponents(l-c,_-m,p-g,I-w).normalize();else if(s[4].setComponents(l-c,_-m,p-g,I-w).normalize(),t===Tn)s[5].setComponents(l+c,_+m,p+g,I+w).normalize();else if(t===xr)s[5].setComponents(c,m,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=nu.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cs extends Bt{constructor(e,t,n=Rn,s,r,a,o=Lt,c=Lt,l,u=Wn,h=1){if(u!==Wn&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:h};super(m,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class iu extends Cs{constructor(e,t=Rn,n=xi,s,r,a=Lt,o=Lt,c,l=Wn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class oc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ei extends ln{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],m=[],_=[];let S=0;const E=[],g=n/2;let p=0;L(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new Ut(h,3)),this.setAttribute("normal",new Ut(m,3)),this.setAttribute("uv",new Ut(_,2));function L(){const w=new z,I=new z;let U=0;const N=(t-e)/n;for(let V=0;V<=r;V++){const v=[],y=V/r,B=y*(t-e)+e;for(let G=0;G<=s;G++){const X=G/s,ee=X*c+o,te=Math.sin(ee),$=Math.cos(ee);I.x=B*te,I.y=-y*n+g,I.z=B*$,h.push(I.x,I.y,I.z),w.set(te,N,$).normalize(),m.push(w.x,w.y,w.z),_.push(X,1-y),v.push(S++)}E.push(v)}for(let V=0;V<s;V++)for(let v=0;v<r;v++){const y=E[v][V],B=E[v+1][V],G=E[v+1][V+1],X=E[v][V+1];(e>0||v!==0)&&(u.push(y,B,X),U+=3),(t>0||v!==r-1)&&(u.push(B,G,X),U+=3)}l.addGroup(p,U,0),p+=U}function P(w){const I=S,U=new Fe,N=new z;let V=0;const v=w===!0?e:t,y=w===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,g*y,0),m.push(0,y,0),_.push(.5,.5),S++;const B=S;for(let G=0;G<=s;G++){const ee=G/s*c+o,te=Math.cos(ee),$=Math.sin(ee);N.x=v*$,N.y=g*y,N.z=v*te,h.push(N.x,N.y,N.z),m.push(0,y,0),U.x=te*.5+.5,U.y=$*.5*y+.5,_.push(U.x,U.y),S++}for(let G=0;G<s;G++){const X=I+G,ee=B+G;w===!0?u.push(ee,ee+1,X):u.push(ee+1,ee,X),V+=3}l.addGroup(p,V,w===!0?1:2),p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends Ei{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,m=t/c,_=[],S=[],E=[],g=[];for(let p=0;p<u;p++){const L=p*m-a;for(let P=0;P<l;P++){const w=P*h-r;S.push(w,-L,0),E.push(0,0,1),g.push(P/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let L=0;L<o;L++){const P=L+l*p,w=L+l*(p+1),I=L+1+l*(p+1),U=L+1+l*p;_.push(P,w,U),_.push(w,I,U)}this.setIndex(_),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ls extends ln{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new z,m=new z,_=[],S=[],E=[],g=[];for(let p=0;p<=n;p++){const L=[],P=p/n;let w=0;p===0&&a===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const U=I/t;h.x=-e*Math.cos(s+U*r)*Math.sin(a+P*o),h.y=e*Math.cos(a+P*o),h.z=e*Math.sin(s+U*r)*Math.sin(a+P*o),S.push(h.x,h.y,h.z),m.copy(h).normalize(),E.push(m.x,m.y,m.z),g.push(U+w,1-P),L.push(l++)}u.push(L)}for(let p=0;p<n;p++)for(let L=0;L<t;L++){const P=u[p][L+1],w=u[p][L],I=u[p+1][L],U=u[p+1][L+1];(p!==0||a>0)&&_.push(P,w,U),(p!==n-1||c<Math.PI)&&_.push(w,I,U)}this.setIndex(_),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class su extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ru extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class au extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ss={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ou{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,m=l.length;h<m;h+=2){const _=l[h],S=l[h+1];if(_.global&&(_.lastIndex=0),_.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lu=new ou;class Is{constructor(e){this.manager=e!==void 0?e:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class cu extends Error{constructor(e,t){super(e),this.response=t}}class hu extends Is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ss.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=kn[e],h=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),_=m?parseInt(m):0,S=_!==0;let E=0;const g=new ReadableStream({start(p){L();function L(){h.read().then(({done:P,value:w})=>{if(P)p.close();else{E+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:_});for(let U=0,N=u.length;U<N;U++){const V=u[U];V.onProgress&&V.onProgress(I)}p.enqueue(w),L()}},P=>{p.error(P)})}}});return new Response(g)}else throw new cu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),m=h&&h[1]?h[1].toLowerCase():void 0,_=new TextDecoder(m);return l.arrayBuffer().then(S=>_.decode(S))}}}).then(l=>{Ss.add(`file:${e}`,l);const u=kn[e];delete kn[e];for(let h=0,m=u.length;h<m;h++){const _=u[h];_.onLoad&&_.onLoad(l)}}).catch(l=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),l;delete kn[e];for(let h=0,m=u.length;h<m;h++){const _=u[h];_.onError&&_.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zi=new WeakMap;class uu extends Is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ss.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=zi.get(a);h===void 0&&(h=[],zi.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Ts("img");function c(){u(),t&&t(this);const h=zi.get(this)||[];for(let m=0;m<h.length;m++){const _=h[m];_.onLoad&&_.onLoad(this)}zi.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Ss.remove(`image:${e}`);const m=zi.get(this)||[];for(let _=0;_<m.length;_++){const S=m[_];S.onError&&S.onError(h)}zi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ss.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class fu extends Is{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ac,o=new hu(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(s!==void 0)s(u);else{u(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:vn,a.wrapT=l.wrapT!==void 0?l.wrapT:vn,a.magFilter=l.magFilter!==void 0?l.magFilter:yt,a.minFilter=l.minFilter!==void 0?l.minFilter:yt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=ni),l.mipmapCount===1&&(a.minFilter=yt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,s),a}}class du extends Is{constructor(e){super(e)}load(e,t,n,s){const r=new Bt,a=new uu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class lc extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ta=new Et,sl=new z,rl=new z;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(sl),rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rl),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Er extends ic{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mu extends pu{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _u extends lc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gu extends lc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xu extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class al{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mu extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){We("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ol(i,e,t,n){const s=Su(n);switch(t){case Yl:return i*e;case Gi:return i*e/s.components*s.byteLength;case _o:return i*e/s.components*s.byteLength;case gn:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case ql:return i*e*3/s.components*s.byteLength;case Dt:return i*e*4/s.components*s.byteLength;case xo:return i*e*4/s.components*s.byteLength;case ur:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case Ta:case wa:return Math.max(i,8)*Math.max(e,8)/2;case Ra:case Pa:case La:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case $a:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Su(i){switch(i){case Jt:case Vl:return{byteLength:1,components:1};case ys:case Gl:case It:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Rn:case fo:case Qt:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function cc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Eu(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,u),o.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<h.length;_++){const S=h[m],E=h[_];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++m,h[m]=E)}h.length=m+1;for(let _=0,S=h.length;_<S;_++){const E=h[_];i.bufferSubData(l,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,If=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:yu,alphahash_pars_fragment:bu,alphamap_fragment:Tu,alphamap_pars_fragment:Au,alphatest_fragment:wu,alphatest_pars_fragment:Cu,aomap_fragment:Ru,aomap_pars_fragment:Pu,batching_pars_vertex:Du,batching_vertex:Lu,begin_vertex:Iu,beginnormal_vertex:Uu,bsdfs:Nu,iridescence_fragment:Fu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Hu,color_fragment:Vu,color_pars_fragment:Gu,color_pars_vertex:Wu,color_vertex:Xu,common:Yu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ku,displacementmap_vertex:ju,emissivemap_fragment:$u,emissivemap_pars_fragment:Ju,colorspace_fragment:Qu,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:ff,lights_lambert_fragment:df,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:gf,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:yf,lights_fragment_maps:bf,lights_fragment_end:Tf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Rf,map_fragment:Pf,map_pars_fragment:Df,map_particle_fragment:Lf,map_particle_pars_fragment:If,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:zf,morphtarget_vertex:kf,normal_fragment_begin:Hf,normal_fragment_maps:Vf,normal_pars_fragment:Gf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:jf,opaque_fragment:$f,packing:Jf,premultiplied_alpha_fragment:Qf,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:fd,specularmap_fragment:dd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:_d,transmission_fragment:gd,transmission_pars_fragment:xd,uv_pars_fragment:vd,uv_pars_vertex:Md,uv_vertex:Sd,worldpos_vertex:Ed,background_vert:yd,background_frag:bd,backgroundCube_vert:Td,backgroundCube_frag:Ad,cube_vert:wd,cube_frag:Cd,depth_vert:Rd,depth_frag:Pd,distance_vert:Dd,distance_frag:Ld,equirect_vert:Id,equirect_frag:Ud,linedashed_vert:Nd,linedashed_frag:Fd,meshbasic_vert:Od,meshbasic_frag:Bd,meshlambert_vert:zd,meshlambert_frag:kd,meshmatcap_vert:Hd,meshmatcap_frag:Vd,meshnormal_vert:Gd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:Yd,meshphysical_vert:qd,meshphysical_frag:Zd,meshtoon_vert:Kd,meshtoon_frag:jd,points_vert:$d,points_frag:Jd,shadow_vert:Qd,shadow_frag:ep,sprite_vert:tp,sprite_frag:np},Ee={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},bn={basic:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Vt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Vt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Vt([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Vt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Vt([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Vt([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Vt([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Vt([Ee.lights,Ee.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};bn.physical={uniforms:Vt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ar={r:0,b:0,g:0},di=new Pn,ip=new Et;function sp(i,e,t,n,s,r,a){const o=new tt(0);let c=r===!0?0:1,l,u,h=null,m=0,_=null;function S(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function E(P){let w=!1;const I=S(P);I===null?p(o,c):I&&I.isColor&&(p(I,1),w=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(P,w){const I=S(w);I&&(I.isCubeTexture||I.mapping===Mr)?(u===void 0&&(u=new Tt(new Si(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Qi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(w.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(di)),u.material.toneMapped=at.getTransfer(I.colorSpace)!==ft,(h!==I||m!==I.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,m=I.version,_=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Tt(new Sr(2,2),new Ot({name:"BackgroundMaterial",uniforms:Qi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=at.getTransfer(I.colorSpace)!==ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||m!==I.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,m=I.version,_=i.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null))}function p(P,w){P.getRGB(ar,nc(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,w,a)}function L(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,w=1){o.set(P),c=w,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,p(o,c)},render:E,addToRenderList:g,dispose:L}}function rp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,a=!1;function o(y,B,G,X,ee){let te=!1;const $=h(X,G,B);r!==$&&(r=$,l(r.object)),te=_(y,X,G,ee),te&&S(y,X,G,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,w(y,B,G,X),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,B,G){const X=G.wireframe===!0;let ee=n[y.id];ee===void 0&&(ee={},n[y.id]=ee);let te=ee[B.id];te===void 0&&(te={},ee[B.id]=te);let $=te[X];return $===void 0&&($=m(c()),te[X]=$),$}function m(y){const B=[],G=[],X=[];for(let ee=0;ee<t;ee++)B[ee]=0,G[ee]=0,X[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:X,object:y,attributes:{},index:null}}function _(y,B,G,X){const ee=r.attributes,te=B.attributes;let $=0;const Z=G.getAttributes();for(const ce in Z)if(Z[ce].location>=0){const _e=ee[ce];let ye=te[ce];if(ye===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;$++}return r.attributesNum!==$||r.index!==X}function S(y,B,G,X){const ee={},te=B.attributes;let $=0;const Z=G.getAttributes();for(const ce in Z)if(Z[ce].location>=0){let _e=te[ce];_e===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),ee[ce]=ye,$++}r.attributes=ee,r.attributesNum=$,r.index=X}function E(){const y=r.newAttributes;for(let B=0,G=y.length;B<G;B++)y[B]=0}function g(y){p(y,0)}function p(y,B){const G=r.newAttributes,X=r.enabledAttributes,ee=r.attributeDivisors;G[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),ee[y]!==B&&(i.vertexAttribDivisor(y,B),ee[y]=B)}function L(){const y=r.newAttributes,B=r.enabledAttributes;for(let G=0,X=B.length;G<X;G++)B[G]!==y[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function P(y,B,G,X,ee,te,$){$===!0?i.vertexAttribIPointer(y,B,G,ee,te):i.vertexAttribPointer(y,B,G,X,ee,te)}function w(y,B,G,X){E();const ee=X.attributes,te=G.getAttributes(),$=B.defaultAttributeValues;for(const Z in te){const ce=te[Z];if(ce.location>=0){let xe=ee[Z];if(xe===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),xe!==void 0){const _e=xe.normalized,ye=xe.itemSize,Be=e.get(xe);if(Be===void 0)continue;const ke=Be.buffer,ht=Be.type,it=Be.bytesPerElement,j=ht===i.INT||ht===i.UNSIGNED_INT||xe.gpuType===fo;if(xe.isInterleavedBufferAttribute){const oe=xe.data,Ae=oe.stride,Xe=xe.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<ce.locationSize;Re++)p(ce.location+Re,oe.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<ce.locationSize;Re++)g(ce.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Re=0;Re<ce.locationSize;Re++)P(ce.location+Re,ye/ce.locationSize,ht,_e,Ae*it,(Xe+ye/ce.locationSize*Re)*it,j)}else{if(xe.isInstancedBufferAttribute){for(let oe=0;oe<ce.locationSize;oe++)p(ce.location+oe,xe.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let oe=0;oe<ce.locationSize;oe++)g(ce.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let oe=0;oe<ce.locationSize;oe++)P(ce.location+oe,ye/ce.locationSize,ht,_e,ye*it,ye/ce.locationSize*oe*it,j)}}else if($!==void 0){const _e=$[Z];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ce.location,_e);break;case 3:i.vertexAttrib3fv(ce.location,_e);break;case 4:i.vertexAttrib4fv(ce.location,_e);break;default:i.vertexAttrib1fv(ce.location,_e)}}}}L()}function I(){V();for(const y in n){const B=n[y];for(const G in B){const X=B[G];for(const ee in X)u(X[ee].object),delete X[ee];delete B[G]}delete n[y]}}function U(y){if(n[y.id]===void 0)return;const B=n[y.id];for(const G in B){const X=B[G];for(const ee in X)u(X[ee].object),delete X[ee];delete B[G]}delete n[y.id]}function N(y){for(const B in n){const G=n[B];if(G[y.id]===void 0)continue;const X=G[y.id];for(const ee in X)u(X[ee].object),delete X[ee];delete G[y.id]}}function V(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:g,disableUnusedAttributes:L}}function ap(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let _=0;for(let S=0;S<h;S++)_+=u[S];t.update(_,n,1)}function c(l,u,h,m){if(h===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<l.length;S++)a(l[S],u[S],m[S]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,u,0,m,0,h);let S=0;for(let E=0;E<h;E++)S+=u[E]*m[E];t.update(S,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function op(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Dt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const V=N===It&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Jt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Qt&&!V)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),U=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:w,maxSamples:I,samples:U}}function lp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ei,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const _=h.length!==0||m||n!==0||s;return s=m,n=h.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,m){t=u(h,m,0)},this.setState=function(h,m,_){const S=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||S===null||S.length===0||r&&!g)r?u(null):l();else{const L=r?0:n,P=L*4;let w=p.clippingState||null;c.value=w,w=u(S,m,P,_);for(let I=0;I!==P;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,m,_,S){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=c.value,S!==!0||g===null){const p=_+E*4,L=m.matrixWorldInverse;o.getNormalMatrix(L),(g===null||g.length<p)&&(g=new Float32Array(p));for(let P=0,w=_;P!==E;++P,w+=4)a.copy(h[P]).applyMatrix4(L,o),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function cp(i){let e=new WeakMap;function t(a,o){return o===Sa?a.mapping=xi:o===Ea&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ii=4,ll=[.125,.215,.35,.446,.526,.582],_i=20,hp=256,ps=new Er,cl=new tt;let na=null,ia=0,sa=0,ra=!1;const up=new z;class io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=up}=r;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:It,format:Dt,colorSpace:$t,depthBuffer:!1},s=hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,e,t),this._ggxMaterial=dp(r,e,t)}return s}_compileMaterial(e){const t=new Tt(new ln,e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,n,s,r){const c=new rn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,_=h.toneMapping;h.getClearColor(cl),h.toneMapping=wn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Si,new To({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let p=!1;const L=e.background;L?L.isColor&&(g.color.copy(L),e.background=null,p=!0):(g.color.copy(cl),p=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[P],r.y,r.z)):w===1?(c.up.set(0,0,l[P]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[P],r.z)):(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[P]));const I=this._cubeSize;ki(s,w*I,P>2?I:0,I,I),h.setRenderTarget(s),p&&h.render(E,c),h.render(e,c)}h.toneMapping=_,h.autoClear=m,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xi||e.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ki(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),m=0+l*1.25,_=h*m,{_lodMax:S}=this,E=this._sizeLods[n],g=3*E*(n>S-ii?n-S+ii:0),p=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=_,c.mipInt.value=S-t,ki(r,g,p,3*E,2*E),s.setRenderTarget(r),s.render(o,ps),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,ki(e,g,p,3*E,2*E),s.setRenderTarget(e),s.render(o,ps)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const m=l.uniforms,_=this._sizeLods[n]-1,S=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*_i-1),E=r/S,g=isFinite(r)?1+Math.floor(u*E):_i;g>_i&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_i}`);const p=[];let L=0;for(let N=0;N<_i;++N){const V=N/E,v=Math.exp(-V*V/2);p.push(v),N===0?L+=v:N<g&&(L+=2*v)}for(let N=0;N<p.length;N++)p[N]=p[N]/L;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=p,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:P}=this;m.dTheta.value=S,m.mipInt.value=P-n;const w=this._sizeLods[s],I=3*w*(s>P-ii?s-P+ii:0),U=4*(this._cubeSize-w);ki(t,I,U,3*w,2*w),c.setRenderTarget(t),c.render(h,ps)}}function fp(i){const e=[],t=[],n=[];let s=i;const r=i-ii+1+ll.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ii?c=ll[a-i+ii-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,m=[u,u,h,u,h,h,u,u,h,h,u,h],_=6,S=6,E=3,g=2,p=1,L=new Float32Array(E*S*_),P=new Float32Array(g*S*_),w=new Float32Array(p*S*_);for(let U=0;U<_;U++){const N=U%3*2/3-1,V=U>2?0:-1,v=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];L.set(v,E*S*U),P.set(m,g*S*U);const y=[U,U,U,U,U,U];w.set(y,p*S*U)}const I=new ln;I.setAttribute("position",new Cn(L,E)),I.setAttribute("uv",new Cn(P,g)),I.setAttribute("faceIndex",new Cn(w,p)),n.push(new Tt(I,null)),s>ii&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function hl(i,e,t){const n=new qt(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dp(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function pp(i,e,t){const n=new Float32Array(_i),s=new z(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ul(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function fl(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function yr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sa||c===Ea,u=c===xi||c===Ji;if(l||u){let h=e.get(o);const m=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new io(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const _=o.image;return l&&_&&_.height>0||u&&_&&s(_)?(t===null&&(t=new io(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _p(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function gp(i,e,t,n){const s={},r=new WeakMap;function a(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",a),delete s[m.id];const _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(h,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,t.memory.geometries++),m}function c(h){const m=h.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER)}function l(h){const m=[],_=h.index,S=h.attributes.position;let E=0;if(_!==null){const L=_.array;E=_.version;for(let P=0,w=L.length;P<w;P+=3){const I=L[P+0],U=L[P+1],N=L[P+2];m.push(I,U,U,N,N,I)}}else if(S!==void 0){const L=S.array;E=S.version;for(let P=0,w=L.length/3-1;P<w;P+=3){const I=P+0,U=P+1,N=P+2;m.push(I,U,U,N,N,I)}}else return;const g=new(Kl(m)?tc:ec)(m,1);g.version=E;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const m=r.get(h);if(m){const _=h.index;_!==null&&m.version<_.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function xp(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,_){i.drawElements(n,_,r,m*a),t.update(_,n,1)}function l(m,_,S){S!==0&&(i.drawElementsInstanced(n,_,r,m*a,S),t.update(_,n,S))}function u(m,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,m,0,S);let g=0;for(let p=0;p<S;p++)g+=_[p];t.update(g,n,1)}function h(m,_,S,E){if(S===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<m.length;p++)l(m[p]/a,_[p],E[p]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,r,m,0,E,0,S);let p=0;for(let L=0;L<S;L++)p+=_[L]*E[L];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mp(i,e,t){const n=new WeakMap,s=new St;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let m=n.get(o);if(m===void 0||m.count!==h){let y=function(){V.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var _=y;m!==void 0&&m.texture.dispose();const S=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],L=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let w=0;S===!0&&(w=1),E===!0&&(w=2),g===!0&&(w=3);let I=o.attributes.position.count*w,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const N=new Float32Array(I*U*4*h),V=new $l(N,I,U,h);V.type=Qt,V.needsUpdate=!0;const v=w*4;for(let B=0;B<h;B++){const G=p[B],X=L[B],ee=P[B],te=I*U*4*B;for(let $=0;$<G.count;$++){const Z=$*v;S===!0&&(s.fromBufferAttribute(G,$),N[te+Z+0]=s.x,N[te+Z+1]=s.y,N[te+Z+2]=s.z,N[te+Z+3]=0),E===!0&&(s.fromBufferAttribute(X,$),N[te+Z+4]=s.x,N[te+Z+5]=s.y,N[te+Z+6]=s.z,N[te+Z+7]=0),g===!0&&(s.fromBufferAttribute(ee,$),N[te+Z+8]=s.x,N[te+Z+9]=s.y,N[te+Z+10]=s.z,N[te+Z+11]=ee.itemSize===4?s.w:1)}}m={count:h,texture:V,size:new Fe(I,U)},n.set(o,m),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let S=0;for(let g=0;g<l.length;g++)S+=l[g];const E=o.morphTargetsRelative?1:1-S;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Sp(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Ep={[Nl]:"LINEAR_TONE_MAPPING",[Fl]:"REINHARD_TONE_MAPPING",[Ol]:"CINEON_TONE_MAPPING",[uo]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function yp(i,e,t,n,s){const r=new qt(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new qt(e,t,{type:It,depthBuffer:!1,stencilBuffer:!1}),o=new ln;o.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const c=new su({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Tt(o,c),u=new Er(-1,1,1,-1,0,1);let h=null,m=null,_=!1,S,E=null,g=[],p=!1;this.setSize=function(L,P){r.setSize(L,P),a.setSize(L,P);for(let w=0;w<g.length;w++){const I=g[w];I.setSize&&I.setSize(L,P)}},this.setEffects=function(L){g=L,p=g.length>0&&g[0].isRenderPass===!0;const P=r.width,w=r.height;for(let I=0;I<g.length;I++){const U=g[I];U.setSize&&U.setSize(P,w)}},this.begin=function(L,P){if(_||L.toneMapping===wn&&g.length===0)return!1;if(E=P,P!==null){const w=P.width,I=P.height;(r.width!==w||r.height!==I)&&this.setSize(w,I)}return p===!1&&L.setRenderTarget(r),S=L.toneMapping,L.toneMapping=wn,!0},this.hasRenderPass=function(){return p},this.end=function(L,P){L.toneMapping=S,_=!0;let w=r,I=a;for(let U=0;U<g.length;U++){const N=g[U];if(N.enabled!==!1&&(N.render(L,I,w,P),N.needsSwap!==!1)){const V=w;w=I,I=V}}if(h!==L.outputColorSpace||m!==L.toneMapping){h=L.outputColorSpace,m=L.toneMapping,c.defines={},at.getTransfer(h)===ft&&(c.defines.SRGB_TRANSFER="");const U=Ep[m];U&&(c.defines[U]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,L.setRenderTarget(E),L.render(l,u),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const hc=new Bt,so=new Cs(1,1),uc=new $l,fc=new Ih,dc=new sc,dl=[],pl=[],ml=new Float32Array(16),_l=new Float32Array(9),gl=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=dl[s];if(r===void 0&&(r=new Float32Array(s),dl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function br(i,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;gl.set(n),i.uniformMatrix2fv(this.addr,!1,gl),Rt(t,n)}}function Rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),Rt(t,n)}}function Pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),Rt(t,n)}}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(so.compareFunction=t.isReversedDepthBuffer()?Mo:vo,r=so):r=hc,t.setTexture2D(e||r,s)}function kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fc,s)}function Hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dc,s)}function Vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uc,s)}function Gp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return Ap;case 35666:return wp;case 35674:return Cp;case 35675:return Rp;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Wp(i,e){i.uniform1fv(this.addr,e)}function Xp(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function Yp(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function qp(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function Zp(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kp(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jp(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $p(i,e){i.uniform1iv(this.addr,e)}function Jp(i,e){i.uniform2iv(this.addr,e)}function Qp(i,e){i.uniform3iv(this.addr,e)}function em(i,e){i.uniform4iv(this.addr,e)}function tm(i,e){i.uniform1uiv(this.addr,e)}function nm(i,e){i.uniform2uiv(this.addr,e)}function im(i,e){i.uniform3uiv(this.addr,e)}function sm(i,e){i.uniform4uiv(this.addr,e)}function rm(i,e,t){const n=this.cache,s=e.length,r=br(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=so:a=hc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function am(i,e,t){const n=this.cache,s=e.length,r=br(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fc,r[a])}function om(i,e,t){const n=this.cache,s=e.length,r=br(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dc,r[a])}function lm(i,e,t){const n=this.cache,s=e.length,r=br(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uc,r[a])}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return Yp;case 35666:return qp;case 35674:return Zp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return $p;case 35667:case 35671:return Jp;case 35668:case 35672:return Qp;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cm(t.type)}}class fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function xl(i,e){i.seq.push(e),i.map[e.id]=e}function dm(i,e,t){const n=i.name,s=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xl(t,l===void 0?new hm(o,i,e):new um(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new fm(o),xl(t,h)),t=h}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);dm(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pm=37297;let mm=0;function _m(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ml=new Ke;function gm(i){at._getMatrix(Ml,at.workingColorSpace,i);const e=`mat3( ${Ml.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_m(i.getShaderSource(e),o)}else return r}function xm(i,e){const t=gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vm={[Nl]:"Linear",[Fl]:"Reinhard",[Ol]:"Cineon",[uo]:"ACESFilmic",[zl]:"AgX",[kl]:"Neutral",[Bl]:"Custom"};function Mm(i,e){const t=vm[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const or=new z;function Sm(){at.getLuminanceCoefficients(or);const i=or.x.toFixed(4),e=or.y.toFixed(4),t=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gs(i){return i!==""}function El(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(Tm,wm)}const Am=new Map;function wm(i,e){let t=je[e];if(t===void 0){const n=Am.get(e);if(n!==void 0)t=je[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ro(t)}const Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Cm,Rm)}function Rm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Pm={[hr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Dm(i){return Pm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lm={[xi]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function Im(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Um={[Ji]:"ENVMAP_MODE_REFRACTION"};function Nm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Um[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fm={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function Om(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fm[i.combine]||"ENVMAP_BLENDING_NONE"}function Bm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Dm(t),l=Im(t),u=Nm(t),h=Om(t),m=Bm(t),_=Em(t),S=ym(r),E=s.createProgram();let g,p,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(g=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?je.tonemapping_pars_fragment:"",t.toneMapping!==wn?Mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,xm("linearToOutputTexel",t.outputColorSpace),Sm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=ro(a),a=El(a,t),a=yl(a,t),o=ro(o),o=El(o,t),o=yl(o,t),a=bl(a),o=bl(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=L+g+a,w=L+p+o,I=vl(s,s.VERTEX_SHADER,P),U=vl(s,s.FRAGMENT_SHADER,w);s.attachShader(E,I),s.attachShader(E,U),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(B){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(I)||"",ee=s.getShaderInfoLog(U)||"",te=G.trim(),$=X.trim(),Z=ee.trim();let ce=!0,xe=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,I,U);else{const _e=Sl(s,I,"vertex"),ye=Sl(s,U,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+te+`
`+_e+`
`+ye)}else te!==""?We("WebGLProgram: Program Info Log:",te):($===""||Z==="")&&(xe=!1);xe&&(B.diagnostics={runnable:ce,programLog:te,vertexShader:{log:$,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(I),s.deleteShader(U),V=new mr(s,E),v=bm(s,E)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let v;this.getAttributes=function(){return v===void 0&&N(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(E,pm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=U,this}let km=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vm(e),t.set(e,n)),n}}class Vm{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}}function Gm(i,e,t,n,s,r,a){const o=new bo,c=new Hm,l=new Set,u=[],h=new Map,m=s.logarithmicDepthBuffer;let _=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,B,G,X){const ee=G.fog,te=X.geometry,$=v.isMeshStandardMaterial?G.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),ce=Z&&Z.mapping===Mr?Z.image.height:null,xe=S[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const _e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ye=_e!==void 0?_e.length:0;let Be=0;te.morphAttributes.position!==void 0&&(Be=1),te.morphAttributes.normal!==void 0&&(Be=2),te.morphAttributes.color!==void 0&&(Be=3);let ke,ht,it,j;if(xe){const ct=bn[xe];ke=ct.vertexShader,ht=ct.fragmentShader}else ke=v.vertexShader,ht=v.fragmentShader,c.update(v),it=c.getVertexShaderID(v),j=c.getFragmentShaderID(v);const oe=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Xe=X.isInstancedMesh===!0,Re=X.isBatchedMesh===!0,et=!!v.map,gt=!!v.matcap,$e=!!Z,ot=!!v.aoMap,ut=!!v.lightMap,Ze=!!v.bumpMap,Mt=!!v.normalMap,F=!!v.displacementMap,xt=!!v.emissiveMap,st=!!v.metalnessMap,dt=!!v.roughnessMap,Pe=v.anisotropy>0,b=v.clearcoat>0,x=v.dispersion>0,k=v.iridescence>0,ie=v.sheen>0,le=v.transmission>0,Q=Pe&&!!v.anisotropyMap,Ie=b&&!!v.clearcoatMap,ge=b&&!!v.clearcoatNormalMap,De=b&&!!v.clearcoatRoughnessMap,He=k&&!!v.iridescenceMap,fe=k&&!!v.iridescenceThicknessMap,pe=ie&&!!v.sheenColorMap,Se=ie&&!!v.sheenRoughnessMap,Le=!!v.specularMap,me=!!v.specularColorMap,Oe=!!v.specularIntensityMap,O=le&&!!v.transmissionMap,be=le&&!!v.thicknessMap,W=!!v.gradientMap,Te=!!v.alphaMap,ue=v.alphaTest>0,ae=!!v.alphaHash,ve=!!v.extensions;let Ye=wn;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const pt={shaderID:xe,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:ht,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Re,batchingColor:Re&&X._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&X.instanceColor!==null,instancingMorph:Xe&&X.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$t,alphaToCoverage:!!v.alphaToCoverage,map:et,matcap:gt,envMap:$e,envMapMode:$e&&Z.mapping,envMapCubeUVHeight:ce,aoMap:ot,lightMap:ut,bumpMap:Ze,normalMap:Mt,displacementMap:F,emissiveMap:xt,normalMapObjectSpace:Mt&&v.normalMapType===ih,normalMapTangentSpace:Mt&&v.normalMapType===Zl,metalnessMap:st,roughnessMap:dt,anisotropy:Pe,anisotropyMap:Q,clearcoat:b,clearcoatMap:Ie,clearcoatNormalMap:ge,clearcoatRoughnessMap:De,dispersion:x,iridescence:k,iridescenceMap:He,iridescenceThicknessMap:fe,sheen:ie,sheenColorMap:pe,sheenRoughnessMap:Se,specularMap:Le,specularColorMap:me,specularIntensityMap:Oe,transmission:le,transmissionMap:O,thicknessMap:be,gradientMap:W,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:Te,alphaTest:ue,alphaHash:ae,combine:v.combine,mapUv:et&&E(v.map.channel),aoMapUv:ot&&E(v.aoMap.channel),lightMapUv:ut&&E(v.lightMap.channel),bumpMapUv:Ze&&E(v.bumpMap.channel),normalMapUv:Mt&&E(v.normalMap.channel),displacementMapUv:F&&E(v.displacementMap.channel),emissiveMapUv:xt&&E(v.emissiveMap.channel),metalnessMapUv:st&&E(v.metalnessMap.channel),roughnessMapUv:dt&&E(v.roughnessMap.channel),anisotropyMapUv:Q&&E(v.anisotropyMap.channel),clearcoatMapUv:Ie&&E(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&E(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(v.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&E(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&E(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&E(v.sheenRoughnessMap.channel),specularMapUv:Le&&E(v.specularMap.channel),specularColorMapUv:me&&E(v.specularColorMap.channel),specularIntensityMapUv:Oe&&E(v.specularIntensityMap.channel),transmissionMapUv:O&&E(v.transmissionMap.channel),thicknessMapUv:be&&E(v.thicknessMap.channel),alphaMapUv:Te&&E(v.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Mt||Pe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!te.attributes.uv&&(et||Te),fog:!!ee,useFog:v.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ae,skinning:X.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:et&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)y.push(B),y.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(L(y,v),P(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function L(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function P(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function w(v){const y=S[v.type];let B;if(y){const G=bn[y];B=vr.clone(G.uniforms)}else B=v.uniforms;return B}function I(v,y){let B=h.get(y);return B!==void 0?++B.usedTimes:(B=new zm(i,y,v,r),u.push(B),h.set(y,B)),B}function U(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function N(v){c.remove(v)}function V(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:U,releaseShaderCache:N,programs:u,dispose:V}}function Wm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,m,_,S,E,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:m,material:_,groupOrder:S,renderOrder:h.renderOrder,z:E,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=m,p.material=_,p.groupOrder=S,p.renderOrder=h.renderOrder,p.z=E,p.group=g),e++,p}function o(h,m,_,S,E,g){const p=a(h,m,_,S,E,g);_.transmission>0?n.push(p):_.transparent===!0?s.push(p):t.push(p)}function c(h,m,_,S,E,g){const p=a(h,m,_,S,E,g);_.transmission>0?n.unshift(p):_.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,m){t.length>1&&t.sort(h||Xm),n.length>1&&n.sort(m||Al),s.length>1&&s.sort(m||Al)}function u(){for(let h=e,m=i.length;h<m;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Ym(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new wl,i.set(n,[a])):s>=r.length?(a=new wl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Km=0;function jm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $m(i){const e=new qm,t=Zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,r=new Et,a=new Et;function o(l){let u=0,h=0,m=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let _=0,S=0,E=0,g=0,p=0,L=0,P=0,w=0,I=0,U=0,N=0;l.sort(jm);for(let v=0,y=l.length;v<y;v++){const B=l[v],G=B.color,X=B.intensity,ee=B.distance;let te=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===gn?te=B.shadow.map.texture:te=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=G.r*X,h+=G.g*X,m+=G.b*X;else if(B.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(B.sh.coefficients[$],X);N++}else if(B.isDirectionalLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,ce=t.get(B);ce.shadowIntensity=Z.intensity,ce.shadowBias=Z.bias,ce.shadowNormalBias=Z.normalBias,ce.shadowRadius=Z.radius,ce.shadowMapSize=Z.mapSize,n.directionalShadow[_]=ce,n.directionalShadowMap[_]=te,n.directionalShadowMatrix[_]=B.shadow.matrix,L++}n.directional[_]=$,_++}else if(B.isSpotLight){const $=e.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(G).multiplyScalar(X),$.distance=ee,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,n.spot[E]=$;const Z=B.shadow;if(B.map&&(n.spotLightMap[I]=B.map,I++,Z.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[E]=Z.matrix,B.castShadow){const ce=t.get(B);ce.shadowIntensity=Z.intensity,ce.shadowBias=Z.bias,ce.shadowNormalBias=Z.normalBias,ce.shadowRadius=Z.radius,ce.shadowMapSize=Z.mapSize,n.spotShadow[E]=ce,n.spotShadowMap[E]=te,w++}E++}else if(B.isRectAreaLight){const $=e.get(B);$.color.copy(G).multiplyScalar(X),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),n.rectArea[g]=$,g++}else if(B.isPointLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),$.distance=B.distance,$.decay=B.decay,B.castShadow){const Z=B.shadow,ce=t.get(B);ce.shadowIntensity=Z.intensity,ce.shadowBias=Z.bias,ce.shadowNormalBias=Z.normalBias,ce.shadowRadius=Z.radius,ce.shadowMapSize=Z.mapSize,ce.shadowCameraNear=Z.camera.near,ce.shadowCameraFar=Z.camera.far,n.pointShadow[S]=ce,n.pointShadowMap[S]=te,n.pointShadowMatrix[S]=B.shadow.matrix,P++}n.point[S]=$,S++}else if(B.isHemisphereLight){const $=e.get(B);$.skyColor.copy(B.color).multiplyScalar(X),$.groundColor.copy(B.groundColor).multiplyScalar(X),n.hemi[p]=$,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=m;const V=n.hash;(V.directionalLength!==_||V.pointLength!==S||V.spotLength!==E||V.rectAreaLength!==g||V.hemiLength!==p||V.numDirectionalShadows!==L||V.numPointShadows!==P||V.numSpotShadows!==w||V.numSpotMaps!==I||V.numLightProbes!==N)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=g,n.point.length=S,n.hemi.length=p,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=w+I-U,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=N,V.directionalLength=_,V.pointLength=S,V.spotLength=E,V.rectAreaLength=g,V.hemiLength=p,V.numDirectionalShadows=L,V.numPointShadows=P,V.numSpotShadows=w,V.numSpotMaps=I,V.numLightProbes=N,n.version=Km++)}function c(l,u){let h=0,m=0,_=0,S=0,E=0;const g=u.matrixWorldInverse;for(let p=0,L=l.length;p<L;p++){const P=l[p];if(P.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(P.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(P.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(P.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(P.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(g),m++}else if(P.isHemisphereLight){const w=n.hemi[E];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(g),E++}}}return{setup:o,setupView:c,state:n}}function Cl(i){const e=new $m(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Jm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Cl(i),e.set(s,[o])):r>=a.length?(o=new Cl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,t_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],n_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Rl=new Et,ms=new z,oa=new z;function i_(i,e,t){let n=new Ao;const s=new Fe,r=new Fe,a=new St,o=new ru,c=new au,l={},u=t.maxTextureSize,h={[ri]:Yt,[Yt]:ri,[Hn]:Hn},m=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Qm,fragmentShader:e_}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new ln;S.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Tt(S,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let p=this.type;this.render=function(U,N,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;U.type===Uc&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=hr);const v=i.getRenderTarget(),y=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),G=i.state;G.setBlending(An),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=p!==this.type;X&&N.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(te=>te.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,te=U.length;ee<te;ee++){const $=U[ee],Z=$.shadow;if(Z===void 0){We("WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const ce=Z.getFrameExtents();if(s.multiply(ce),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,Z.mapSize.y=r.y)),Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===_s){if($.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new qt(s.x,s.y,{format:gn,type:It,minFilter:yt,magFilter:yt,generateMipmaps:!1}),Z.map.texture.name=$.name+".shadowMap",Z.map.depthTexture=new Cs(s.x,s.y,Qt),Z.map.depthTexture.name=$.name+".shadowMapDepth",Z.map.depthTexture.format=Wn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Lt,Z.map.depthTexture.magFilter=Lt}else{$.isPointLight?(Z.map=new rc(s.x),Z.map.depthTexture=new iu(s.x,Rn)):(Z.map=new qt(s.x,s.y),Z.map.depthTexture=new Cs(s.x,s.y,Rn)),Z.map.depthTexture.name=$.name+".shadowMap",Z.map.depthTexture.format=Wn;const _e=i.state.buffers.depth.getReversed();this.type===hr?(Z.map.depthTexture.compareFunction=_e?Mo:vo,Z.map.depthTexture.minFilter=yt,Z.map.depthTexture.magFilter=yt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Lt,Z.map.depthTexture.magFilter=Lt)}Z.camera.updateProjectionMatrix()}const xe=Z.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<xe;_e++){if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(Z.map),i.clear());const ye=Z.getViewport(_e);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),G.viewport(a)}if($.isPointLight){const ye=Z.camera,Be=Z.matrix,ke=$.distance||ye.far;ke!==ye.far&&(ye.far=ke,ye.updateProjectionMatrix()),ms.setFromMatrixPosition($.matrixWorld),ye.position.copy(ms),oa.copy(ye.position),oa.add(t_[_e]),ye.up.copy(n_[_e]),ye.lookAt(oa),ye.updateMatrixWorld(),Be.makeTranslation(-ms.x,-ms.y,-ms.z),Rl.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Rl,ye.coordinateSystem,ye.reversedDepth)}else Z.updateMatrices($);n=Z.getFrustum(),w(N,V,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===_s&&L(Z,V),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(v,y,B)};function L(U,N){const V=e.update(E);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,_.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new qt(s.x,s.y,{format:gn,type:It})),m.uniforms.shadow_pass.value=U.map.depthTexture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(N,null,V,m,E,null),_.uniforms.shadow_pass.value=U.mapPass.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(N,null,V,_,E,null)}function P(U,N,V,v){let y=null;const B=V.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)y=B;else if(y=V.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const G=y.uuid,X=N.uuid;let ee=l[G];ee===void 0&&(ee={},l[G]=ee);let te=ee[X];te===void 0&&(te=y.clone(),ee[X]=te,N.addEventListener("dispose",I)),y=te}if(y.visible=N.visible,y.wireframe=N.wireframe,v===_s?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:h[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=i.properties.get(y);G.light=V}return y}function w(U,N,V,v,y){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&y===_s)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,U.matrixWorld);const X=e.update(U),ee=U.material;if(Array.isArray(ee)){const te=X.groups;for(let $=0,Z=te.length;$<Z;$++){const ce=te[$],xe=ee[ce.materialIndex];if(xe&&xe.visible){const _e=P(U,xe,v,y);U.onBeforeShadow(i,U,N,V,X,_e,ce),i.renderBufferDirect(V,null,X,_e,U,ce),U.onAfterShadow(i,U,N,V,X,_e,ce)}}}else if(ee.visible){const te=P(U,ee,v,y);U.onBeforeShadow(i,U,N,V,X,te,null),i.renderBufferDirect(V,null,X,te,U,null),U.onAfterShadow(i,U,N,V,X,te,null)}}const G=U.children;for(let X=0,ee=G.length;X<ee;X++)w(G[X],N,V,v,y)}function I(U){U.target.removeEventListener("dispose",I);for(const V in l){const v=l[V],y=U.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const s_={[pa]:ma,[_a]:va,[ga]:Ma,[$i]:xa,[ma]:pa,[va]:_a,[Ma]:ga,[xa]:$i};function r_(i,e){function t(){let O=!1;const be=new St;let W=null;const Te=new St(0,0,0,0);return{setMask:function(ue){W!==ue&&!O&&(i.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){O=ue},setClear:function(ue,ae,ve,Ye,pt){pt===!0&&(ue*=Ye,ae*=Ye,ve*=Ye),be.set(ue,ae,ve,Ye),Te.equals(be)===!1&&(i.clearColor(ue,ae,ve,Ye),Te.copy(be))},reset:function(){O=!1,W=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,be=!1,W=null,Te=null,ue=null;return{setReversed:function(ae){if(be!==ae){const ve=e.get("EXT_clip_control");ae?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),be=ae;const Ye=ue;ue=null,this.setClear(Ye)}},getReversed:function(){return be},setTest:function(ae){ae?oe(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ae){W!==ae&&!O&&(i.depthMask(ae),W=ae)},setFunc:function(ae){if(be&&(ae=s_[ae]),Te!==ae){switch(ae){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ae}},setLocked:function(ae){O=ae},setClear:function(ae){ue!==ae&&(be&&(ae=1-ae),i.clearDepth(ae),ue=ae)},reset:function(){O=!1,W=null,Te=null,ue=null,be=!1}}}function s(){let O=!1,be=null,W=null,Te=null,ue=null,ae=null,ve=null,Ye=null,pt=null;return{setTest:function(ct){O||(ct?oe(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ct){be!==ct&&!O&&(i.stencilMask(ct),be=ct)},setFunc:function(ct,tn,cn){(W!==ct||Te!==tn||ue!==cn)&&(i.stencilFunc(ct,tn,cn),W=ct,Te=tn,ue=cn)},setOp:function(ct,tn,cn){(ae!==ct||ve!==tn||Ye!==cn)&&(i.stencilOp(ct,tn,cn),ae=ct,ve=tn,Ye=cn)},setLocked:function(ct){O=ct},setClear:function(ct){pt!==ct&&(i.clearStencil(ct),pt=ct)},reset:function(){O=!1,be=null,W=null,Te=null,ue=null,ae=null,ve=null,Ye=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},m=new WeakMap,_=[],S=null,E=!1,g=null,p=null,L=null,P=null,w=null,I=null,U=null,N=new tt(0,0,0),V=0,v=!1,y=null,B=null,G=null,X=null,ee=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),$=Z>=1):ce.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),$=Z>=2);let xe=null,_e={};const ye=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),ke=new St().fromArray(ye),ht=new St().fromArray(Be);function it(O,be,W,Te){const ue=new Uint8Array(4),ae=i.createTexture();i.bindTexture(O,ae),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<W;ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(be+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ae}const j={};j[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc($i),Ze(!1),Mt(Lo),oe(i.CULL_FACE),ot(An);function oe(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ae(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Xe(O,be){return h[O]!==be?(i.bindFramebuffer(O,be),h[O]=be,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Re(O,be){let W=_,Te=!1;if(O){W=m.get(be),W===void 0&&(W=[],m.set(be,W));const ue=O.textures;if(W.length!==ue.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ve=ue.length;ae<ve;ae++)W[ae]=i.COLOR_ATTACHMENT0+ae;W.length=ue.length,Te=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Te=!0);Te&&i.drawBuffers(W)}function et(O){return S!==O?(i.useProgram(O),S=O,!0):!1}const gt={[mi]:i.FUNC_ADD,[Fc]:i.FUNC_SUBTRACT,[Oc]:i.FUNC_REVERSE_SUBTRACT};gt[Bc]=i.MIN,gt[zc]=i.MAX;const $e={[kc]:i.ZERO,[Hc]:i.ONE,[Vc]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Zc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Wc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[qc]:i.ONE_MINUS_DST_COLOR,[Xc]:i.ONE_MINUS_DST_ALPHA,[Kc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[Jc]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(O,be,W,Te,ue,ae,ve,Ye,pt,ct){if(O===An){E===!0&&(Ae(i.BLEND),E=!1);return}if(E===!1&&(oe(i.BLEND),E=!0),O!==Nc){if(O!==g||ct!==v){if((p!==mi||w!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,w=mi),ct)switch(O){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ua:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",O);break}else switch(O){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Io:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",O);break}L=null,P=null,I=null,U=null,N.set(0,0,0),V=0,g=O,v=ct}return}ue=ue||be,ae=ae||W,ve=ve||Te,(be!==p||ue!==w)&&(i.blendEquationSeparate(gt[be],gt[ue]),p=be,w=ue),(W!==L||Te!==P||ae!==I||ve!==U)&&(i.blendFuncSeparate($e[W],$e[Te],$e[ae],$e[ve]),L=W,P=Te,I=ae,U=ve),(Ye.equals(N)===!1||pt!==V)&&(i.blendColor(Ye.r,Ye.g,Ye.b,pt),N.copy(Ye),V=pt),g=O,v=!1}function ut(O,be){O.side===Hn?Ae(i.CULL_FACE):oe(i.CULL_FACE);let W=O.side===Yt;be&&(W=!W),Ze(W),O.blending===qi&&O.transparent===!1?ot(An):ot(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Te=O.stencilWrite;o.setTest(Te),Te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Mt(O){O!==Lc?(oe(i.CULL_FACE),O!==B&&(O===Lo?i.cullFace(i.BACK):O===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),B=O}function F(O){O!==G&&($&&i.lineWidth(O),G=O)}function xt(O,be,W){O?(oe(i.POLYGON_OFFSET_FILL),(X!==be||ee!==W)&&(i.polygonOffset(be,W),X=be,ee=W)):Ae(i.POLYGON_OFFSET_FILL)}function st(O){O?oe(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function dt(O){O===void 0&&(O=i.TEXTURE0+te-1),xe!==O&&(i.activeTexture(O),xe=O)}function Pe(O,be,W){W===void 0&&(xe===null?W=i.TEXTURE0+te-1:W=xe);let Te=_e[W];Te===void 0&&(Te={type:void 0,texture:void 0},_e[W]=Te),(Te.type!==O||Te.texture!==be)&&(xe!==W&&(i.activeTexture(W),xe=W),i.bindTexture(O,be||j[O]),Te.type=O,Te.texture=be)}function b(){const O=_e[xe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function ie(){try{i.texSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function le(){try{i.texSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function ge(){try{i.texStorage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function De(){try{i.texStorage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function He(){try{i.texImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function fe(){try{i.texImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function pe(O){ke.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ke.copy(O))}function Se(O){ht.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ht.copy(O))}function Le(O,be){let W=l.get(be);W===void 0&&(W=new WeakMap,l.set(be,W));let Te=W.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(be,O.name),W.set(O,Te))}function me(O,be){const Te=l.get(be).get(O);c.get(be)!==Te&&(i.uniformBlockBinding(be,Te,O.__bindingPointIndex),c.set(be,Te))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},xe=null,_e={},h={},m=new WeakMap,_=[],S=null,E=!1,g=null,p=null,L=null,P=null,w=null,I=null,U=null,N=new tt(0,0,0),V=0,v=!1,y=null,B=null,G=null,X=null,ee=null,ke.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Ae,bindFramebuffer:Xe,drawBuffers:Re,useProgram:et,setBlending:ot,setMaterial:ut,setFlipSided:Ze,setCullFace:Mt,setLineWidth:F,setPolygonOffset:xt,setScissorTest:st,activeTexture:dt,bindTexture:Pe,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:He,texImage3D:fe,updateUBOMapping:Le,uniformBlockBinding:me,texStorage2D:ge,texStorage3D:De,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ie,scissor:pe,viewport:Se,reset:Oe}}function a_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,u=new WeakMap;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,x){return _?new OffscreenCanvas(b,x):Ts("canvas")}function E(b,x,k){let ie=1;const le=Pe(b);if((le.width>k||le.height>k)&&(ie=k/Math.max(le.width,le.height)),ie<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(ie*le.width),Ie=Math.floor(ie*le.height);h===void 0&&(h=S(Q,Ie));const ge=x?S(Q,Ie):h;return ge.width=Q,ge.height=Ie,ge.getContext("2d").drawImage(b,0,0,Q,Ie),We("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Ie+")."),ge}else return"data"in b&&We("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function L(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(b,x,k,ie,le=!1){if(b!==null){if(i[b]!==void 0)return i[b];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=x;if(x===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){const Ie=le?gr:at.getTransfer(ie);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Ie===ft?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(b,x){let k;return b?x===null||x===Rn||x===bs?k=i.DEPTH24_STENCIL8:x===Qt?k=i.DEPTH32F_STENCIL8:x===ys&&(k=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===bs?k=i.DEPTH_COMPONENT24:x===Qt?k=i.DEPTH_COMPONENT32F:x===ys&&(k=i.DEPTH_COMPONENT16),k}function I(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Lt&&b.minFilter!==yt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function U(b){const x=b.target;x.removeEventListener("dispose",U),V(x),x.isVideoTexture&&u.delete(x)}function N(b){const x=b.target;x.removeEventListener("dispose",N),y(x)}function V(b){const x=n.get(b);if(x.__webglInit===void 0)return;const k=b.source,ie=m.get(k);if(ie){const le=ie[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&v(b),Object.keys(ie).length===0&&m.delete(k)}n.remove(b)}function v(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const k=b.source,ie=m.get(k);delete ie[x.__cacheKey],a.memory.textures--}function y(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(x.__webglFramebuffer[ie]))for(let le=0;le<x.__webglFramebuffer[ie].length;le++)i.deleteFramebuffer(x.__webglFramebuffer[ie][le]);else i.deleteFramebuffer(x.__webglFramebuffer[ie]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ie])}else{if(Array.isArray(x.__webglFramebuffer))for(let ie=0;ie<x.__webglFramebuffer.length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[ie]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ie=0;ie<x.__webglColorRenderbuffer.length;ie++)x.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ie]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=b.textures;for(let ie=0,le=k.length;ie<le;ie++){const Q=n.get(k[ie]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(k[ie])}n.remove(b)}let B=0;function G(){B=0}function X(){const b=B;return b>=s.maxTextures&&We("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),B+=1,b}function ee(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function te(b,x){const k=n.get(b);if(b.isVideoTexture&&st(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const ie=b.image;if(ie===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,b,x);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function $(b,x){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){j(k,b,x);return}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function Z(b,x){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){j(k,b,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function ce(b,x){const k=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&k.__version!==b.version){oe(k,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const xe={[ya]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},_e={[Lt]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},ye={[sh]:i.NEVER,[ch]:i.ALWAYS,[rh]:i.LESS,[vo]:i.LEQUAL,[ah]:i.EQUAL,[Mo]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function Be(b,x){if(x.type===Qt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===yt||x.magFilter===Lr||x.magFilter===Vs||x.magFilter===ni||x.minFilter===yt||x.minFilter===Lr||x.minFilter===Vs||x.minFilter===ni)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,xe[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,xe[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,xe[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,_e[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Lt||x.minFilter!==Vs&&x.minFilter!==ni||x.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ke(b,x){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",U));const ie=x.source;let le=m.get(ie);le===void 0&&(le={},m.set(ie,le));const Q=ee(x);if(Q!==b.__cacheKey){le[Q]===void 0&&(le[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),le[Q].usedTimes++;const Ie=le[b.__cacheKey];Ie!==void 0&&(le[b.__cacheKey].usedTimes--,Ie.usedTimes===0&&v(x)),b.__cacheKey=Q,b.__webglTexture=le[Q].texture}return k}function ht(b,x,k){return Math.floor(Math.floor(b/k)/x)}function it(b,x,k,ie){const Q=b.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,ie,x.data);else{Q.sort((fe,pe)=>fe.start-pe.start);let Ie=0;for(let fe=1;fe<Q.length;fe++){const pe=Q[Ie],Se=Q[fe],Le=pe.start+pe.count,me=ht(Se.start,x.width,4),Oe=ht(pe.start,x.width,4);Se.start<=Le+1&&me===Oe&&ht(Se.start+Se.count-1,x.width,4)===me?pe.count=Math.max(pe.count,Se.start+Se.count-pe.start):(++Ie,Q[Ie]=Se)}Q.length=Ie+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),De=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let fe=0,pe=Q.length;fe<pe;fe++){const Se=Q[fe],Le=Math.floor(Se.start/4),me=Math.ceil(Se.count/4),Oe=Le%x.width,O=Math.floor(Le/x.width),be=me,W=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Oe,O,be,W,k,ie,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function j(b,x,k){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);const le=ke(b,x),Q=x.source;t.bindTexture(ie,b.__webglTexture,i.TEXTURE0+k);const Ie=n.get(Q);if(Q.version!==Ie.__version||le===!0){t.activeTexture(i.TEXTURE0+k);const ge=at.getPrimaries(at.workingColorSpace),De=x.colorSpace===ti?null:at.getPrimaries(x.colorSpace),He=x.colorSpace===ti||ge===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let fe=E(x.image,!1,s.maxTextureSize);fe=dt(x,fe);const pe=r.convert(x.format,x.colorSpace),Se=r.convert(x.type);let Le=P(x.internalFormat,pe,Se,x.colorSpace,x.isVideoTexture);Be(ie,x);let me;const Oe=x.mipmaps,O=x.isVideoTexture!==!0,be=Ie.__version===void 0||le===!0,W=Q.dataReady,Te=I(x,fe);if(x.isDepthTexture)Le=w(x.format===gi,x.type),be&&(O?t.texStorage2D(i.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Le,fe.width,fe.height,0,pe,Se,null));else if(x.isDataTexture)if(Oe.length>0){O&&be&&t.texStorage2D(i.TEXTURE_2D,Te,Le,Oe[0].width,Oe[0].height);for(let ue=0,ae=Oe.length;ue<ae;ue++)me=Oe[ue],O?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(i.TEXTURE_2D,ue,Le,me.width,me.height,0,pe,Se,me.data);x.generateMipmaps=!1}else O?(be&&t.texStorage2D(i.TEXTURE_2D,Te,Le,fe.width,fe.height),W&&it(x,fe,pe,Se)):t.texImage2D(i.TEXTURE_2D,0,Le,fe.width,fe.height,0,pe,Se,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Le,Oe[0].width,Oe[0].height,fe.depth);for(let ue=0,ae=Oe.length;ue<ae;ue++)if(me=Oe[ue],x.format!==Dt)if(pe!==null)if(O){if(W)if(x.layerUpdates.size>0){const ve=ol(me.width,me.height,x.format,x.type);for(const Ye of x.layerUpdates){const pt=me.data.subarray(Ye*ve/me.data.BYTES_PER_ELEMENT,(Ye+1)*ve/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ye,me.width,me.height,1,pe,pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,fe.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Le,me.width,me.height,fe.depth,0,me.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,fe.depth,pe,Se,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Le,me.width,me.height,fe.depth,0,pe,Se,me.data)}else{O&&be&&t.texStorage2D(i.TEXTURE_2D,Te,Le,Oe[0].width,Oe[0].height);for(let ue=0,ae=Oe.length;ue<ae;ue++)me=Oe[ue],x.format!==Dt?pe!==null?O?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Le,me.width,me.height,0,me.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(i.TEXTURE_2D,ue,Le,me.width,me.height,0,pe,Se,me.data)}else if(x.isDataArrayTexture)if(O){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Le,fe.width,fe.height,fe.depth),W)if(x.layerUpdates.size>0){const ue=ol(fe.width,fe.height,x.format,x.type);for(const ae of x.layerUpdates){const ve=fe.data.subarray(ae*ue/fe.data.BYTES_PER_ELEMENT,(ae+1)*ue/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,pe,Se,ve)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,pe,Se,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,pe,Se,fe.data);else if(x.isData3DTexture)O?(be&&t.texStorage3D(i.TEXTURE_3D,Te,Le,fe.width,fe.height,fe.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,pe,Se,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,pe,Se,fe.data);else if(x.isFramebufferTexture){if(be)if(O)t.texStorage2D(i.TEXTURE_2D,Te,Le,fe.width,fe.height);else{let ue=fe.width,ae=fe.height;for(let ve=0;ve<Te;ve++)t.texImage2D(i.TEXTURE_2D,ve,Le,ue,ae,0,pe,Se,null),ue>>=1,ae>>=1}}else if(Oe.length>0){if(O&&be){const ue=Pe(Oe[0]);t.texStorage2D(i.TEXTURE_2D,Te,Le,ue.width,ue.height)}for(let ue=0,ae=Oe.length;ue<ae;ue++)me=Oe[ue],O?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,pe,Se,me):t.texImage2D(i.TEXTURE_2D,ue,Le,pe,Se,me);x.generateMipmaps=!1}else if(O){if(be){const ue=Pe(fe);t.texStorage2D(i.TEXTURE_2D,Te,Le,ue.width,ue.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Se,fe)}else t.texImage2D(i.TEXTURE_2D,0,Le,pe,Se,fe);g(x)&&p(ie),Ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function oe(b,x,k){if(x.image.length!==6)return;const ie=ke(b,x),le=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const Q=n.get(le);if(le.version!==Q.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const Ie=at.getPrimaries(at.workingColorSpace),ge=x.colorSpace===ti?null:at.getPrimaries(x.colorSpace),De=x.colorSpace===ti||Ie===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const He=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!He&&!fe?pe[ae]=E(x.image[ae],!0,s.maxCubemapSize):pe[ae]=fe?x.image[ae].image:x.image[ae],pe[ae]=dt(x,pe[ae]);const Se=pe[0],Le=r.convert(x.format,x.colorSpace),me=r.convert(x.type),Oe=P(x.internalFormat,Le,me,x.colorSpace),O=x.isVideoTexture!==!0,be=Q.__version===void 0||ie===!0,W=le.dataReady;let Te=I(x,Se);Be(i.TEXTURE_CUBE_MAP,x);let ue;if(He){O&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Oe,Se.width,Se.height);for(let ae=0;ae<6;ae++){ue=pe[ae].mipmaps;for(let ve=0;ve<ue.length;ve++){const Ye=ue[ve];x.format!==Dt?Le!==null?O?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Ye.width,Ye.height,Le,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Oe,Ye.width,Ye.height,0,Ye.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Ye.width,Ye.height,Le,me,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Oe,Ye.width,Ye.height,0,Le,me,Ye.data)}}}else{if(ue=x.mipmaps,O&&be){ue.length>0&&Te++;const ae=Pe(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Oe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){O?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,Le,me,pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,pe[ae].width,pe[ae].height,0,Le,me,pe[ae].data);for(let ve=0;ve<ue.length;ve++){const pt=ue[ve].image[ae].image;O?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,pt.width,pt.height,Le,me,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Oe,pt.width,pt.height,0,Le,me,pt.data)}}else{O?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le,me,pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,Le,me,pe[ae]);for(let ve=0;ve<ue.length;ve++){const Ye=ue[ve];O?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Le,me,Ye.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Oe,Le,me,Ye.image[ae])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),Q.__version=le.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ae(b,x,k,ie,le,Q){const Ie=r.convert(k.format,k.colorSpace),ge=r.convert(k.type),De=P(k.internalFormat,Ie,ge,k.colorSpace),He=n.get(x),fe=n.get(k);if(fe.__renderTarget=x,!He.__hasExternalTextures){const pe=Math.max(1,x.width>>Q),Se=Math.max(1,x.height>>Q);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,De,pe,Se,x.depth,0,Ie,ge,null):t.texImage2D(le,Q,De,pe,Se,0,Ie,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,le,fe.__webglTexture,0,F(x)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,le,fe.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(b,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const ie=x.depthTexture,le=ie&&ie.isDepthTexture?ie.type:null,Q=w(x.stencilBuffer,le),Ie=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(x),Q,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,b)}else{const ie=x.textures;for(let le=0;le<ie.length;le++){const Q=ie[le],Ie=r.convert(Q.format,Q.colorSpace),ge=r.convert(Q.type),De=P(Q.internalFormat,Ie,ge,Q.colorSpace);xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(x),De,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(x),De,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,De,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(b,x,k){const ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(x.depthTexture);if(le.__renderTarget=x,(!le.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie){if(le.__webglInit===void 0&&(le.__webglInit=!0,x.depthTexture.addEventListener("dispose",U)),le.__webglTexture===void 0){le.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x.depthTexture);const He=r.convert(x.depthTexture.format),fe=r.convert(x.depthTexture.type);let pe;x.depthTexture.format===Wn?pe=i.DEPTH_COMPONENT24:x.depthTexture.format===gi&&(pe=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,x.width,x.height,0,He,fe,null)}}else te(x.depthTexture,0);const Q=le.__webglTexture,Ie=F(x),ge=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,De=x.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wn)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,De,ge,Q,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,De,ge,Q,0);else if(x.depthTexture.format===gi)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,De,ge,Q,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,De,ge,Q,0);else throw new Error("Unknown depthTexture format")}function et(b){const x=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const ie=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",le)};ie.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=ie}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let ie=0;ie<6;ie++)Re(x.__webglFramebuffer[ie],b,ie);else{const ie=b.texture.mipmaps;ie&&ie.length>0?Re(x.__webglFramebuffer[0],b,0):Re(x.__webglFramebuffer,b,0)}else if(k){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),Xe(x.__webglDepthbuffer[ie],b,!1);else{const le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,Q)}}else{const ie=b.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Xe(x.__webglDepthbuffer,b,!1);else{const le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(b,x,k){const ie=n.get(b);x!==void 0&&Ae(ie.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&et(b)}function $e(b){const x=b.texture,k=n.get(b),ie=n.get(x);b.addEventListener("dispose",N);const le=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,a.memory.textures++),Q){k.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ge]=[];for(let De=0;De<x.mipmaps.length;De++)k.__webglFramebuffer[ge][De]=i.createFramebuffer()}else k.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)k.__webglFramebuffer[ge]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ge=0,De=le.length;ge<De;ge++){const He=n.get(le[ge]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&xt(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const De=le[ge];k.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ge]);const He=r.convert(De.format,De.colorSpace),fe=r.convert(De.type),pe=P(De.internalFormat,He,fe,De.colorSpace,b.isXRRenderTarget===!0),Se=F(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,k.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)Ae(k.__webglFramebuffer[ge][De],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De);else Ae(k.__webglFramebuffer[ge],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,De=le.length;ge<De;ge++){const He=le[ge],fe=n.get(He);let pe=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,fe.__webglTexture),Be(pe,He),Ae(k.__webglFramebuffer,b,He,i.COLOR_ATTACHMENT0+ge,pe,0),g(He)&&p(pe)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ie.__webglTexture),Be(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)Ae(k.__webglFramebuffer[De],b,x,i.COLOR_ATTACHMENT0,ge,De);else Ae(k.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ge,0);g(x)&&p(ge),t.unbindTexture()}b.depthBuffer&&et(b)}function ot(b){const x=b.textures;for(let k=0,ie=x.length;k<ie;k++){const le=x[k];if(g(le)){const Q=L(b),Ie=n.get(le).__webglTexture;t.bindTexture(Q,Ie),p(Q),t.unbindTexture()}}}const ut=[],Ze=[];function Mt(b){if(b.samples>0){if(xt(b)===!1){const x=b.textures,k=b.width,ie=b.height;let le=i.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(b),ge=x.length>1;if(ge)for(let He=0;He<x.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const De=b.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let He=0;He<x.length;He++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[He]);const fe=n.get(x[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,le,i.NEAREST),c===!0&&(ut.length=0,Ze.length=0,ut.push(i.COLOR_ATTACHMENT0+He),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ut.push(Q),Ze.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let He=0;He<x.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[He]);const fe=n.get(x[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function F(b){return Math.min(s.maxSamples,b.samples)}function xt(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function st(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function dt(b,x){const k=b.colorSpace,ie=b.format,le=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==$t&&k!==ti&&(at.getTransfer(k)===ft?(ie!==Dt||le!==Jt)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",k)),x}function Pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.setTexture2D=te,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=ce,this.rebindTextures=gt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o_(i,e){function t(n,s=ti){let r;const a=at.getTransfer(s);if(n===Jt)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===It)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===ql)return i.RGB;if(n===Dt)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Gi)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===gn)return i.RG;if(n===go)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===ur||n===fr||n===dr||n===pr)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Aa||n===wa||n===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Pa)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===Za||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===$a||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===eo||n===to||n===no)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new oc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends Mi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,m=null,_=null,S=null;const E=typeof XRWebGLBinding<"u",g=new h_,p={},L=t.getContextAttributes();let P=null,w=null;const I=[],U=[],N=new Fe;let V=null;const v=new rn;v.viewport=new St;const y=new rn;y.viewport=new St;const B=[v,y],G=new xu;let X=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=I[j];return oe===void 0&&(oe=new Qr,I[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=I[j];return oe===void 0&&(oe=new Qr,I[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=I[j];return oe===void 0&&(oe=new Qr,I[j]=oe),oe.getHandSpace()};function te(j){const oe=U.indexOf(j.inputSource);if(oe===-1)return;const Ae=I[oe];Ae!==void 0&&(Ae.update(j.inputSource,j.frame,l||a),Ae.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<I.length;j++){const oe=U[j];oe!==null&&(U[j]=null,I[j].disconnect(oe))}X=null,ee=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(P),_=null,m=null,h=null,s=null,w=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),L.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Xe=null,Re=null;L.depth&&(Re=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=L.stencil?gi:Wn,Xe=L.stencil?bs:Rn);const et={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),m=h.createProjectionLayer(et),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new qt(m.textureWidth,m.textureHeight,{format:Dt,type:Jt,depthTexture:new Cs(m.textureWidth,m.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Ae={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new qt(_.framebufferWidth,_.framebufferHeight,{format:Dt,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(j){for(let oe=0;oe<j.removed.length;oe++){const Ae=j.removed[oe],Xe=U.indexOf(Ae);Xe>=0&&(U[Xe]=null,I[Xe].disconnect(Ae))}for(let oe=0;oe<j.added.length;oe++){const Ae=j.added[oe];let Xe=U.indexOf(Ae);if(Xe===-1){for(let et=0;et<I.length;et++)if(et>=U.length){U.push(Ae),Xe=et;break}else if(U[et]===null){U[et]=Ae,Xe=et;break}if(Xe===-1)break}const Re=I[Xe];Re&&Re.connect(Ae)}}const ce=new z,xe=new z;function _e(j,oe,Ae){ce.setFromMatrixPosition(oe.matrixWorld),xe.setFromMatrixPosition(Ae.matrixWorld);const Xe=ce.distanceTo(xe),Re=oe.projectionMatrix.elements,et=Ae.projectionMatrix.elements,gt=Re[14]/(Re[10]-1),$e=Re[14]/(Re[10]+1),ot=(Re[9]+1)/Re[5],ut=(Re[9]-1)/Re[5],Ze=(Re[8]-1)/Re[0],Mt=(et[8]+1)/et[0],F=gt*Ze,xt=gt*Mt,st=Xe/(-Ze+Mt),dt=st*-Ze;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(dt),j.translateZ(st),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Pe=gt+st,b=$e+st,x=F-dt,k=xt+(Xe-dt),ie=ot*$e/b*Pe,le=ut*$e/b*Pe;j.projectionMatrix.makePerspective(x,k,ie,le,Pe,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let oe=j.near,Ae=j.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),G.near=y.near=v.near=oe,G.far=y.far=v.far=Ae,(X!==G.near||ee!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),X=G.near,ee=G.far),G.layers.mask=j.layers.mask|6,v.layers.mask=G.layers.mask&3,y.layers.mask=G.layers.mask&5;const Xe=j.parent,Re=G.cameras;ye(G,Xe);for(let et=0;et<Re.length;et++)ye(Re[et],Xe);Re.length===2?_e(G,v,y):G.projectionMatrix.copy(v.projectionMatrix),Be(j,G,Xe)};function Be(j,oe,Ae){Ae===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(Ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ws*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(m===null&&_===null))return c},this.setFoveation=function(j){c=j,m!==null&&(m.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(j){return p[j]};let ke=null;function ht(j,oe){if(u=oe.getViewerPose(l||a),S=oe,u!==null){const Ae=u.views;_!==null&&(e.setRenderTargetFramebuffer(w,_.framebuffer),e.setRenderTarget(w));let Xe=!1;Ae.length!==G.cameras.length&&(G.cameras.length=0,Xe=!0);for(let $e=0;$e<Ae.length;$e++){const ot=Ae[$e];let ut=null;if(_!==null)ut=_.getViewport(ot);else{const Mt=h.getViewSubImage(m,ot);ut=Mt.viewport,$e===0&&(e.setRenderTargetTextures(w,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(w))}let Ze=B[$e];Ze===void 0&&(Ze=new rn,Ze.layers.enable($e),Ze.viewport=new St,B[$e]=Ze),Ze.matrix.fromArray(ot.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ot.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ut.x,ut.y,ut.width,ut.height),$e===0&&(G.matrix.copy(Ze.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Xe===!0&&G.cameras.push(Ze)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){h=n.getBinding();const $e=h.getDepthInformation(Ae[0]);$e&&$e.isValid&&$e.texture&&g.init($e,s.renderState)}if(Re&&Re.includes("camera-access")&&E){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<Ae.length;$e++){const ot=Ae[$e].camera;if(ot){let ut=p[ot];ut||(ut=new oc,p[ot]=ut);const Ze=h.getCameraImage(ot);ut.sourceTexture=Ze}}}}for(let Ae=0;Ae<I.length;Ae++){const Xe=U[Ae],Re=I[Ae];Xe!==null&&Re!==void 0&&Re.update(Xe,oe,l||a)}ke&&ke(j,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),S=null}const it=new cc;it.setAnimationLoop(ht),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const pi=new Pn,f_=new Et;function d_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,L,P,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),m(g,p),p.isMeshPhysicalMaterial&&_(g,p,w)):p.isMeshMatcapMaterial?(r(g,p),S(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),E(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,L,P):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const L=e.get(p),P=L.envMap,w=L.envMapRotation;P&&(g.envMap.value=P,pi.copy(w),pi.x*=-1,pi.y*=-1,pi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),g.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(pi)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,L,P){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*L,g.scale.value=P*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function m(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function _(g,p,L){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,p){p.matcap&&(g.matcap.value=p.matcap)}function E(g,p){const L=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,P){const w=P.program;n.uniformBlockBinding(L,w)}function l(L,P){let w=s[L.id];w===void 0&&(S(L),w=u(L),s[L.id]=w,L.addEventListener("dispose",g));const I=P.program;n.updateUBOMapping(L,I);const U=e.render.frame;r[L.id]!==U&&(m(L),r[L.id]=U)}function u(L){const P=h();L.__bindingPointIndex=P;const w=i.createBuffer(),I=L.__size,U=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,w),w}function h(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(L){const P=s[L.id],w=L.uniforms,I=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let U=0,N=w.length;U<N;U++){const V=Array.isArray(w[U])?w[U]:[w[U]];for(let v=0,y=V.length;v<y;v++){const B=V[v];if(_(B,U,v,I)===!0){const G=B.__offset,X=Array.isArray(B.value)?B.value:[B.value];let ee=0;for(let te=0;te<X.length;te++){const $=X[te],Z=E($);typeof $=="number"||typeof $=="boolean"?(B.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,G+ee,B.__data)):$.isMatrix3?(B.__data[0]=$.elements[0],B.__data[1]=$.elements[1],B.__data[2]=$.elements[2],B.__data[3]=0,B.__data[4]=$.elements[3],B.__data[5]=$.elements[4],B.__data[6]=$.elements[5],B.__data[7]=0,B.__data[8]=$.elements[6],B.__data[9]=$.elements[7],B.__data[10]=$.elements[8],B.__data[11]=0):($.toArray(B.__data,ee),ee+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(L,P,w,I){const U=L.value,N=P+"_"+w;if(I[N]===void 0)return typeof U=="number"||typeof U=="boolean"?I[N]=U:I[N]=U.clone(),!0;{const V=I[N];if(typeof U=="number"||typeof U=="boolean"){if(V!==U)return I[N]=U,!0}else if(V.equals(U)===!1)return V.copy(U),!0}return!1}function S(L){const P=L.uniforms;let w=0;const I=16;for(let N=0,V=P.length;N<V;N++){const v=Array.isArray(P[N])?P[N]:[P[N]];for(let y=0,B=v.length;y<B;y++){const G=v[y],X=Array.isArray(G.value)?G.value:[G.value];for(let ee=0,te=X.length;ee<te;ee++){const $=X[ee],Z=E($),ce=w%I,xe=ce%Z.boundary,_e=ce+xe;w+=xe,_e!==0&&I-_e<Z.storage&&(w+=I-_e),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=Z.storage}}}const U=w%I;return U>0&&(w+=I-U),L.__size=w,L.__cache={},this}function E(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",L),P}function g(L){const P=L.target;P.removeEventListener("dispose",g);const w=a.indexOf(P.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function p(){for(const L in s)i.deleteBuffer(s[L]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function __(){return yn===null&&(yn=new ac(m_,16,16,gn,It),yn.name="DFG_LUT",yn.minFilter=yt,yn.magFilter=yt,yn.wrapS=vn,yn.wrapT=vn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class g_{constructor(e={}){const{canvas:t=hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Jt}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const E=_,g=new Set([xo,go,_o]),p=new Set([Jt,Rn,ys,bs,po,mo]),L=new Uint32Array(4),P=new Int32Array(4);let w=null,I=null;const U=[],N=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=jt;let B=0,G=0,X=null,ee=-1,te=null;const $=new St,Z=new St;let ce=null;const xe=new tt(0);let _e=0,ye=t.width,Be=t.height,ke=1,ht=null,it=null;const j=new St(0,0,ye,Be),oe=new St(0,0,ye,Be);let Ae=!1;const Xe=new Ao;let Re=!1,et=!1;const gt=new Et,$e=new z,ot=new St,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Mt(){return X===null?ke:1}let F=n;function xt(d,T){return t.getContext(d,T)}try{const d={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",ct,!1),F===null){const T="webgl2";if(F=xt(T,d),F===null)throw xt(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw lt("WebGLRenderer: "+d.message),d}let st,dt,Pe,b,x,k,ie,le,Q,Ie,ge,De,He,fe,pe,Se,Le,me,Oe,O,be,W,Te,ue;function ae(){st=new _p(F),st.init(),W=new o_(F,st),dt=new op(F,st,e,W),Pe=new r_(F,st),dt.reversedDepthBuffer&&m&&Pe.buffers.depth.setReversed(!0),b=new vp(F),x=new Wm,k=new a_(F,st,Pe,x,dt,W,b),ie=new cp(v),le=new mp(v),Q=new Eu(F),Te=new rp(F,Q),Ie=new gp(F,Q,b,Te),ge=new Sp(F,Ie,Q,b),Oe=new Mp(F,dt,k),Se=new lp(x),De=new Gm(v,ie,le,st,dt,Te,Se),He=new d_(v,x),fe=new Ym,pe=new Jm(st),me=new sp(v,ie,le,Pe,ge,S,c),Le=new i_(v,ge,dt),ue=new p_(F,b,dt,Pe),O=new ap(F,st,b),be=new xp(F,st,b),b.programs=De.programs,v.capabilities=dt,v.extensions=st,v.properties=x,v.renderLists=fe,v.shadowMap=Le,v.state=Pe,v.info=b}ae(),E!==Jt&&(V=new yp(E,t.width,t.height,s,r));const ve=new u_(v,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const d=st.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=st.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(d){d!==void 0&&(ke=d,this.setSize(ye,Be,!1))},this.getSize=function(d){return d.set(ye,Be)},this.setSize=function(d,T,R=!0){if(ve.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=d,Be=T,t.width=Math.floor(d*ke),t.height=Math.floor(T*ke),R===!0&&(t.style.width=d+"px",t.style.height=T+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,d,T)},this.getDrawingBufferSize=function(d){return d.set(ye*ke,Be*ke).floor()},this.setDrawingBufferSize=function(d,T,R){ye=d,Be=T,ke=R,t.width=Math.floor(d*R),t.height=Math.floor(T*R),this.setViewport(0,0,d,T)},this.setEffects=function(d){if(E===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(d){for(let T=0;T<d.length;T++)if(d[T].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(d||[])},this.getCurrentViewport=function(d){return d.copy($)},this.getViewport=function(d){return d.copy(j)},this.setViewport=function(d,T,R,C){d.isVector4?j.set(d.x,d.y,d.z,d.w):j.set(d,T,R,C),Pe.viewport($.copy(j).multiplyScalar(ke).round())},this.getScissor=function(d){return d.copy(oe)},this.setScissor=function(d,T,R,C){d.isVector4?oe.set(d.x,d.y,d.z,d.w):oe.set(d,T,R,C),Pe.scissor(Z.copy(oe).multiplyScalar(ke).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(d){Pe.setScissorTest(Ae=d)},this.setOpaqueSort=function(d){ht=d},this.setTransparentSort=function(d){it=d},this.getClearColor=function(d){return d.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(d=!0,T=!0,R=!0){let C=0;if(d){let A=!1;if(X!==null){const Y=X.texture.format;A=g.has(Y)}if(A){const Y=X.texture.type,q=p.has(Y),K=me.getClearColor(),se=me.getClearAlpha(),J=K.r,re=K.g,he=K.b;q?(L[0]=J,L[1]=re,L[2]=he,L[3]=se,F.clearBufferuiv(F.COLOR,0,L)):(P[0]=J,P[1]=re,P[2]=he,P[3]=se,F.clearBufferiv(F.COLOR,0,P))}else C|=F.COLOR_BUFFER_BIT}T&&(C|=F.DEPTH_BUFFER_BIT),R&&(C|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),me.dispose(),fe.dispose(),pe.dispose(),x.dispose(),ie.dispose(),le.dispose(),ge.dispose(),Te.dispose(),ue.dispose(),De.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",zs),ve.removeEventListener("sessionend",os),Un.stop()};function Ye(d){d.preventDefault(),zo("WebGLRenderer: Context Lost."),y=!0}function pt(){zo("WebGLRenderer: Context Restored."),y=!1;const d=b.autoReset,T=Le.enabled,R=Le.autoUpdate,C=Le.needsUpdate,A=Le.type;ae(),b.autoReset=d,Le.enabled=T,Le.autoUpdate=R,Le.needsUpdate=C,Le.type=A}function ct(d){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function tn(d){const T=d.target;T.removeEventListener("dispose",tn),cn(T)}function cn(d){Rr(d),x.remove(d)}function Rr(d){const T=x.get(d).programs;T!==void 0&&(T.forEach(function(R){De.releaseProgram(R)}),d.isShaderMaterial&&De.releaseShaderCache(d))}this.renderBufferDirect=function(d,T,R,C,A,Y){T===null&&(T=ut);const q=A.isMesh&&A.matrixWorld.determinant()<0,K=f(d,T,R,C,A);Pe.setMaterial(C,q);let se=R.index,J=1;if(C.wireframe===!0){if(se=Ie.getWireframeAttribute(R),se===void 0)return;J=2}const re=R.drawRange,he=R.attributes.position;let we=re.start*J,Ne=(re.start+re.count)*J;Y!==null&&(we=Math.max(we,Y.start*J),Ne=Math.min(Ne,(Y.start+Y.count)*J)),se!==null?(we=Math.max(we,0),Ne=Math.min(Ne,se.count)):he!=null&&(we=Math.max(we,0),Ne=Math.min(Ne,he.count));const qe=Ne-we;if(qe<0||qe===1/0)return;Te.setup(A,C,K,R,se);let ze,Ce=O;if(se!==null&&(ze=Q.get(se),Ce=be,Ce.setIndex(ze)),A.isMesh)C.wireframe===!0?(Pe.setLineWidth(C.wireframeLinewidth*Mt()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(A.isLine){let Me=C.linewidth;Me===void 0&&(Me=1),Pe.setLineWidth(Me*Mt()),A.isLineSegments?Ce.setMode(F.LINES):A.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else A.isPoints?Ce.setMode(F.POINTS):A.isSprite&&Ce.setMode(F.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)As("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ce.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const Me=A._multiDrawStarts,Ve=A._multiDrawCounts,Ue=A._multiDrawCount,Ge=se?Q.get(se).bytesPerElement:1,rt=x.get(C).currentProgram.getUniforms();for(let vt=0;vt<Ue;vt++)rt.setValue(F,"_gl_DrawID",vt),Ce.render(Me[vt]/Ge,Ve[vt])}else if(A.isInstancedMesh)Ce.renderInstances(we,qe,A.count);else if(R.isInstancedBufferGeometry){const Me=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Ve=Math.min(R.instanceCount,Me);Ce.renderInstances(we,qe,Ve)}else Ce.render(we,qe)};function Bs(d,T,R){d.transparent===!0&&d.side===Hn&&d.forceSinglePass===!1?(d.side=Yt,d.needsUpdate=!0,Ti(d,T,R),d.side=ri,d.needsUpdate=!0,Ti(d,T,R),d.side=Hn):Ti(d,T,R)}this.compile=function(d,T,R=null){R===null&&(R=d),I=pe.get(R),I.init(T),N.push(I),R.traverseVisible(function(A){A.isLight&&A.layers.test(T.layers)&&(I.pushLight(A),A.castShadow&&I.pushShadow(A))}),d!==R&&d.traverseVisible(function(A){A.isLight&&A.layers.test(T.layers)&&(I.pushLight(A),A.castShadow&&I.pushShadow(A))}),I.setupLights();const C=new Set;return d.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const Y=A.material;if(Y)if(Array.isArray(Y))for(let q=0;q<Y.length;q++){const K=Y[q];Bs(K,R,A),C.add(K)}else Bs(Y,R,A),C.add(Y)}),I=N.pop(),C},this.compileAsync=function(d,T,R=null){const C=this.compile(d,T,R);return new Promise(A=>{function Y(){if(C.forEach(function(q){x.get(q).currentProgram.isReady()&&C.delete(q)}),C.size===0){A(d);return}setTimeout(Y,10)}st.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let as=null;function Pr(d){as&&as(d)}function zs(){Un.stop()}function os(){Un.start()}const Un=new cc;Un.setAnimationLoop(Pr),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(d){as=d,ve.setAnimationLoop(d),d===null?Un.stop():Un.start()},ve.addEventListener("sessionstart",zs),ve.addEventListener("sessionend",os),this.render=function(d,T){if(T!==void 0&&T.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const R=ve.enabled===!0&&ve.isPresenting===!0,C=V!==null&&(X===null||R)&&V.begin(v,X);if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(T),T=ve.getCamera()),d.isScene===!0&&d.onBeforeRender(v,d,T,X),I=pe.get(d,N.length),I.init(T),N.push(I),gt.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),Xe.setFromProjectionMatrix(gt,Tn,T.reversedDepth),et=this.localClippingEnabled,Re=Se.init(this.clippingPlanes,et),w=fe.get(d,U.length),w.init(),U.push(w),ve.enabled===!0&&ve.isPresenting===!0){const q=v.xr.getDepthSensingMesh();q!==null&&ls(q,T,-1/0,v.sortObjects)}ls(d,T,0,v.sortObjects),w.finish(),v.sortObjects===!0&&w.sort(ht,it),Ze=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Ze&&me.addToRenderList(w,d),this.info.render.frame++,Re===!0&&Se.beginShadows();const A=I.state.shadowsArray;if(Le.render(A,d,T),Re===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C&&V.hasRenderPass())===!1){const q=w.opaque,K=w.transmissive;if(I.setupLights(),T.isArrayCamera){const se=T.cameras;if(K.length>0)for(let J=0,re=se.length;J<re;J++){const he=se[J];Hs(q,K,d,he)}Ze&&me.render(d);for(let J=0,re=se.length;J<re;J++){const he=se[J];ks(w,d,he,he.viewport)}}else K.length>0&&Hs(q,K,d,T),Ze&&me.render(d),ks(w,d,T)}X!==null&&G===0&&(k.updateMultisampleRenderTarget(X),k.updateRenderTargetMipmap(X)),C&&V.end(v),d.isScene===!0&&d.onAfterRender(v,d,T),Te.resetDefaultState(),ee=-1,te=null,N.pop(),N.length>0?(I=N[N.length-1],Re===!0&&Se.setGlobalState(v.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?w=U[U.length-1]:w=null};function ls(d,T,R,C){if(d.visible===!1)return;if(d.layers.test(T.layers)){if(d.isGroup)R=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(T);else if(d.isLight)I.pushLight(d),d.castShadow&&I.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||Xe.intersectsSprite(d)){C&&ot.setFromMatrixPosition(d.matrixWorld).applyMatrix4(gt);const q=ge.update(d),K=d.material;K.visible&&w.push(d,q,K,R,ot.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||Xe.intersectsObject(d))){const q=ge.update(d),K=d.material;if(C&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),ot.copy(d.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),ot.copy(q.boundingSphere.center)),ot.applyMatrix4(d.matrixWorld).applyMatrix4(gt)),Array.isArray(K)){const se=q.groups;for(let J=0,re=se.length;J<re;J++){const he=se[J],we=K[he.materialIndex];we&&we.visible&&w.push(d,q,we,R,ot.z,he)}}else K.visible&&w.push(d,q,K,R,ot.z,null)}}const Y=d.children;for(let q=0,K=Y.length;q<K;q++)ls(Y[q],T,R,C)}function ks(d,T,R,C){const{opaque:A,transmissive:Y,transparent:q}=d;I.setupLightsView(R),Re===!0&&Se.setGlobalState(v.clippingPlanes,R),C&&Pe.viewport($.copy(C)),A.length>0&&oi(A,T,R),Y.length>0&&oi(Y,T,R),q.length>0&&oi(q,T,R),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Hs(d,T,R,C){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[C.id]===void 0){const we=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[C.id]=new qt(1,1,{generateMipmaps:!0,type:we?It:Jt,minFilter:ni,samples:dt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Y=I.state.transmissionRenderTarget[C.id],q=C.viewport||$;Y.setSize(q.z*v.transmissionResolutionScale,q.w*v.transmissionResolutionScale);const K=v.getRenderTarget(),se=v.getActiveCubeFace(),J=v.getActiveMipmapLevel();v.setRenderTarget(Y),v.getClearColor(xe),_e=v.getClearAlpha(),_e<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&me.render(R);const re=v.toneMapping;v.toneMapping=wn;const he=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),I.setupLightsView(C),Re===!0&&Se.setGlobalState(v.clippingPlanes,C),oi(d,R,C),k.updateMultisampleRenderTarget(Y),k.updateRenderTargetMipmap(Y),st.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ne=0,qe=T.length;Ne<qe;Ne++){const ze=T[Ne],{object:Ce,geometry:Me,material:Ve,group:Ue}=ze;if(Ve.side===Hn&&Ce.layers.test(C.layers)){const Ge=Ve.side;Ve.side=Yt,Ve.needsUpdate=!0,cs(Ce,R,C,Me,Ve,Ue),Ve.side=Ge,Ve.needsUpdate=!0,we=!0}}we===!0&&(k.updateMultisampleRenderTarget(Y),k.updateRenderTargetMipmap(Y))}v.setRenderTarget(K,se,J),v.setClearColor(xe,_e),he!==void 0&&(C.viewport=he),v.toneMapping=re}function oi(d,T,R){const C=T.isScene===!0?T.overrideMaterial:null;for(let A=0,Y=d.length;A<Y;A++){const q=d[A],{object:K,geometry:se,group:J}=q;let re=q.material;re.allowOverride===!0&&C!==null&&(re=C),K.layers.test(R.layers)&&cs(K,T,R,se,re,J)}}function cs(d,T,R,C,A,Y){d.onBeforeRender(v,T,R,C,A,Y),d.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),A.onBeforeRender(v,T,R,C,d,Y),A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,v.renderBufferDirect(R,T,C,A,d,Y),A.side=ri,A.needsUpdate=!0,v.renderBufferDirect(R,T,C,A,d,Y),A.side=Hn):v.renderBufferDirect(R,T,C,A,d,Y),d.onAfterRender(v,T,R,C,A,Y)}function Ti(d,T,R){T.isScene!==!0&&(T=ut);const C=x.get(d),A=I.state.lights,Y=I.state.shadowsArray,q=A.state.version,K=De.getParameters(d,A.state,Y,T,R),se=De.getProgramCacheKey(K);let J=C.programs;C.environment=d.isMeshStandardMaterial?T.environment:null,C.fog=T.fog,C.envMap=(d.isMeshStandardMaterial?le:ie).get(d.envMap||C.environment),C.envMapRotation=C.environment!==null&&d.envMap===null?T.environmentRotation:d.envMapRotation,J===void 0&&(d.addEventListener("dispose",tn),J=new Map,C.programs=J);let re=J.get(se);if(re!==void 0){if(C.currentProgram===re&&C.lightsStateVersion===q)return hn(d,K),re}else K.uniforms=De.getUniforms(d),d.onBeforeCompile(K,v),re=De.acquireProgram(K,se),J.set(se,re),C.uniforms=K.uniforms;const he=C.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(he.clippingPlanes=Se.uniform),hn(d,K),C.needsLights=D(d),C.lightsStateVersion=q,C.needsLights&&(he.ambientLightColor.value=A.state.ambient,he.lightProbe.value=A.state.probe,he.directionalLights.value=A.state.directional,he.directionalLightShadows.value=A.state.directionalShadow,he.spotLights.value=A.state.spot,he.spotLightShadows.value=A.state.spotShadow,he.rectAreaLights.value=A.state.rectArea,he.ltc_1.value=A.state.rectAreaLTC1,he.ltc_2.value=A.state.rectAreaLTC2,he.pointLights.value=A.state.point,he.pointLightShadows.value=A.state.pointShadow,he.hemisphereLights.value=A.state.hemi,he.directionalShadowMap.value=A.state.directionalShadowMap,he.directionalShadowMatrix.value=A.state.directionalShadowMatrix,he.spotShadowMap.value=A.state.spotShadowMap,he.spotLightMatrix.value=A.state.spotLightMatrix,he.spotLightMap.value=A.state.spotLightMap,he.pointShadowMap.value=A.state.pointShadowMap,he.pointShadowMatrix.value=A.state.pointShadowMatrix),C.currentProgram=re,C.uniformsList=null,re}function En(d){if(d.uniformsList===null){const T=d.currentProgram.getUniforms();d.uniformsList=mr.seqWithValue(T.seq,d.uniforms)}return d.uniformsList}function hn(d,T){const R=x.get(d);R.outputColorSpace=T.outputColorSpace,R.batching=T.batching,R.batchingColor=T.batchingColor,R.instancing=T.instancing,R.instancingColor=T.instancingColor,R.instancingMorph=T.instancingMorph,R.skinning=T.skinning,R.morphTargets=T.morphTargets,R.morphNormals=T.morphNormals,R.morphColors=T.morphColors,R.morphTargetsCount=T.morphTargetsCount,R.numClippingPlanes=T.numClippingPlanes,R.numIntersection=T.numClipIntersection,R.vertexAlphas=T.vertexAlphas,R.vertexTangents=T.vertexTangents,R.toneMapping=T.toneMapping}function f(d,T,R,C,A){T.isScene!==!0&&(T=ut),k.resetTextureUnits();const Y=T.fog,q=C.isMeshStandardMaterial?T.environment:null,K=X===null?v.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:$t,se=(C.isMeshStandardMaterial?le:ie).get(C.envMap||q),J=C.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,re=!!R.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),he=!!R.morphAttributes.position,we=!!R.morphAttributes.normal,Ne=!!R.morphAttributes.color;let qe=wn;C.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=v.toneMapping);const ze=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Ce=ze!==void 0?ze.length:0,Me=x.get(C),Ve=I.state.lights;if(Re===!0&&(et===!0||d!==te)){const kt=d===te&&C.id===ee;Se.setState(C,d,kt)}let Ue=!1;C.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ve.state.version||Me.outputColorSpace!==K||A.isBatchedMesh&&Me.batching===!1||!A.isBatchedMesh&&Me.batching===!0||A.isBatchedMesh&&Me.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&Me.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&Me.instancing===!1||!A.isInstancedMesh&&Me.instancing===!0||A.isSkinnedMesh&&Me.skinning===!1||!A.isSkinnedMesh&&Me.skinning===!0||A.isInstancedMesh&&Me.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Me.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&Me.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&Me.instancingMorph===!1&&A.morphTexture!==null||Me.envMap!==se||C.fog===!0&&Me.fog!==Y||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Se.numPlanes||Me.numIntersection!==Se.numIntersection)||Me.vertexAlphas!==J||Me.vertexTangents!==re||Me.morphTargets!==he||Me.morphNormals!==we||Me.morphColors!==Ne||Me.toneMapping!==qe||Me.morphTargetsCount!==Ce)&&(Ue=!0):(Ue=!0,Me.__version=C.version);let Ge=Me.currentProgram;Ue===!0&&(Ge=Ti(C,T,A));let rt=!1,vt=!1,un=!1;const nt=Ge.getUniforms(),At=Me.uniforms;if(Pe.useProgram(Ge.program)&&(rt=!0,vt=!0,un=!0),C.id!==ee&&(ee=C.id,vt=!0),rt||te!==d){Pe.buffers.depth.getReversed()&&d.reversedDepth!==!0&&(d._reversedDepth=!0,d.updateProjectionMatrix()),nt.setValue(F,"projectionMatrix",d.projectionMatrix),nt.setValue(F,"viewMatrix",d.matrixWorldInverse);const Wt=nt.map.cameraPosition;Wt!==void 0&&Wt.setValue(F,$e.setFromMatrixPosition(d.matrixWorld)),dt.logarithmicDepthBuffer&&nt.setValue(F,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&nt.setValue(F,"isOrthographic",d.isOrthographicCamera===!0),te!==d&&(te=d,vt=!0,un=!0)}if(Me.needsLights&&(Ve.state.directionalShadowMap.length>0&&nt.setValue(F,"directionalShadowMap",Ve.state.directionalShadowMap,k),Ve.state.spotShadowMap.length>0&&nt.setValue(F,"spotShadowMap",Ve.state.spotShadowMap,k),Ve.state.pointShadowMap.length>0&&nt.setValue(F,"pointShadowMap",Ve.state.pointShadowMap,k)),A.isSkinnedMesh){nt.setOptional(F,A,"bindMatrix"),nt.setOptional(F,A,"bindMatrixInverse");const kt=A.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),nt.setValue(F,"boneTexture",kt.boneTexture,k))}A.isBatchedMesh&&(nt.setOptional(F,A,"batchingTexture"),nt.setValue(F,"batchingTexture",A._matricesTexture,k),nt.setOptional(F,A,"batchingIdTexture"),nt.setValue(F,"batchingIdTexture",A._indirectTexture,k),nt.setOptional(F,A,"batchingColorTexture"),A._colorsTexture!==null&&nt.setValue(F,"batchingColorTexture",A._colorsTexture,k));const nn=R.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Oe.update(A,R,Ge),(vt||Me.receiveShadow!==A.receiveShadow)&&(Me.receiveShadow=A.receiveShadow,nt.setValue(F,"receiveShadow",A.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(At.envMap.value=se,At.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),C.isMeshStandardMaterial&&C.envMap===null&&T.environment!==null&&(At.envMapIntensity.value=T.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=__()),vt&&(nt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&M(At,un),Y&&C.fog===!0&&He.refreshFogUniforms(At,Y),He.refreshMaterialUniforms(At,C,ke,Be,I.state.transmissionRenderTarget[d.id]),mr.upload(F,En(Me),At,k)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(mr.upload(F,En(Me),At,k),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&nt.setValue(F,"center",A.center),nt.setValue(F,"modelViewMatrix",A.modelViewMatrix),nt.setValue(F,"normalMatrix",A.normalMatrix),nt.setValue(F,"modelMatrix",A.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const kt=C.uniformsGroups;for(let Wt=0,Dr=kt.length;Wt<Dr;Wt++){const li=kt[Wt];ue.update(li,Ge),ue.bind(li,Ge)}}return Ge}function M(d,T){d.ambientLightColor.needsUpdate=T,d.lightProbe.needsUpdate=T,d.directionalLights.needsUpdate=T,d.directionalLightShadows.needsUpdate=T,d.pointLights.needsUpdate=T,d.pointLightShadows.needsUpdate=T,d.spotLights.needsUpdate=T,d.spotLightShadows.needsUpdate=T,d.rectAreaLights.needsUpdate=T,d.hemisphereLights.needsUpdate=T}function D(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(d,T,R){const C=x.get(d);C.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),x.get(d.texture).__webglTexture=T,x.get(d.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:R,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,T){const R=x.get(d);R.__webglFramebuffer=T,R.__useDefaultFramebuffer=T===void 0};const H=F.createFramebuffer();this.setRenderTarget=function(d,T=0,R=0){X=d,B=T,G=R;let C=null,A=!1,Y=!1;if(d){const K=x.get(d);if(K.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(F.FRAMEBUFFER,K.__webglFramebuffer),$.copy(d.viewport),Z.copy(d.scissor),ce=d.scissorTest,Pe.viewport($),Pe.scissor(Z),Pe.setScissorTest(ce),ee=-1;return}else if(K.__webglFramebuffer===void 0)k.setupRenderTarget(d);else if(K.__hasExternalTextures)k.rebindTextures(d,x.get(d.texture).__webglTexture,x.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const re=d.depthTexture;if(K.__boundDepthTexture!==re){if(re!==null&&x.has(re)&&(d.width!==re.image.width||d.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(d)}}const se=d.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Y=!0);const J=x.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(J[T])?C=J[T][R]:C=J[T],A=!0):d.samples>0&&k.useMultisampledRTT(d)===!1?C=x.get(d).__webglMultisampledFramebuffer:Array.isArray(J)?C=J[R]:C=J,$.copy(d.viewport),Z.copy(d.scissor),ce=d.scissorTest}else $.copy(j).multiplyScalar(ke).floor(),Z.copy(oe).multiplyScalar(ke).floor(),ce=Ae;if(R!==0&&(C=H),Pe.bindFramebuffer(F.FRAMEBUFFER,C)&&Pe.drawBuffers(d,C),Pe.viewport($),Pe.scissor(Z),Pe.setScissorTest(ce),A){const K=x.get(d.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+T,K.__webglTexture,R)}else if(Y){const K=T;for(let se=0;se<d.textures.length;se++){const J=x.get(d.textures[se]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+se,J.__webglTexture,R,K)}}else if(d!==null&&R!==0){const K=x.get(d.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,K.__webglTexture,R)}ee=-1},this.readRenderTargetPixels=function(d,T,R,C,A,Y,q,K=0){if(!(d&&d.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=x.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&q!==void 0&&(se=se[q]),se){Pe.bindFramebuffer(F.FRAMEBUFFER,se);try{const J=d.textures[K],re=J.format,he=J.type;if(!dt.textureFormatReadable(re)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(he)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=d.width-C&&R>=0&&R<=d.height-A&&(d.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+K),F.readPixels(T,R,C,A,W.convert(re),W.convert(he),Y))}finally{const J=X!==null?x.get(X).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(d,T,R,C,A,Y,q,K=0){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=x.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&q!==void 0&&(se=se[q]),se)if(T>=0&&T<=d.width-C&&R>=0&&R<=d.height-A){Pe.bindFramebuffer(F.FRAMEBUFFER,se);const J=d.textures[K],re=J.format,he=J.type;if(!dt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,we),F.bufferData(F.PIXEL_PACK_BUFFER,Y.byteLength,F.STREAM_READ),d.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+K),F.readPixels(T,R,C,A,W.convert(re),W.convert(he),0);const Ne=X!==null?x.get(X).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,Ne);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await uh(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,we),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Y),F.deleteBuffer(we),F.deleteSync(qe),Y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(d,T=null,R=0){const C=Math.pow(2,-R),A=Math.floor(d.image.width*C),Y=Math.floor(d.image.height*C),q=T!==null?T.x:0,K=T!==null?T.y:0;k.setTexture2D(d,0),F.copyTexSubImage2D(F.TEXTURE_2D,R,0,0,q,K,A,Y),Pe.unbindTexture()};const ne=F.createFramebuffer(),de=F.createFramebuffer();this.copyTextureToTexture=function(d,T,R=null,C=null,A=0,Y=null){Y===null&&(A!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Y=A,A=0):Y=0);let q,K,se,J,re,he,we,Ne,qe;const ze=d.isCompressedTexture?d.mipmaps[Y]:d.image;if(R!==null)q=R.max.x-R.min.x,K=R.max.y-R.min.y,se=R.isBox3?R.max.z-R.min.z:1,J=R.min.x,re=R.min.y,he=R.isBox3?R.min.z:0;else{const nn=Math.pow(2,-A);q=Math.floor(ze.width*nn),K=Math.floor(ze.height*nn),d.isDataArrayTexture?se=ze.depth:d.isData3DTexture?se=Math.floor(ze.depth*nn):se=1,J=0,re=0,he=0}C!==null?(we=C.x,Ne=C.y,qe=C.z):(we=0,Ne=0,qe=0);const Ce=W.convert(T.format),Me=W.convert(T.type);let Ve;T.isData3DTexture?(k.setTexture3D(T,0),Ve=F.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(k.setTexture2DArray(T,0),Ve=F.TEXTURE_2D_ARRAY):(k.setTexture2D(T,0),Ve=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,T.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,T.unpackAlignment);const Ue=F.getParameter(F.UNPACK_ROW_LENGTH),Ge=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rt=F.getParameter(F.UNPACK_SKIP_PIXELS),vt=F.getParameter(F.UNPACK_SKIP_ROWS),un=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,J),F.pixelStorei(F.UNPACK_SKIP_ROWS,re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,he);const nt=d.isDataArrayTexture||d.isData3DTexture,At=T.isDataArrayTexture||T.isData3DTexture;if(d.isDepthTexture){const nn=x.get(d),kt=x.get(T),Wt=x.get(nn.__renderTarget),Dr=x.get(kt.__renderTarget);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let li=0;li<se;li++)nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(d).__webglTexture,A,he+li),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(T).__webglTexture,Y,qe+li)),F.blitFramebuffer(J,re,q,K,we,Ne,q,K,F.DEPTH_BUFFER_BIT,F.NEAREST);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(A!==0||d.isRenderTargetTexture||x.has(d)){const nn=x.get(d),kt=x.get(T);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,ne),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,de);for(let Wt=0;Wt<se;Wt++)nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,A,he+Wt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,A),At?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.__webglTexture,Y,qe+Wt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kt.__webglTexture,Y),A!==0?F.blitFramebuffer(J,re,q,K,we,Ne,q,K,F.COLOR_BUFFER_BIT,F.NEAREST):At?F.copyTexSubImage3D(Ve,Y,we,Ne,qe+Wt,J,re,q,K):F.copyTexSubImage2D(Ve,Y,we,Ne,J,re,q,K);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else At?d.isDataTexture||d.isData3DTexture?F.texSubImage3D(Ve,Y,we,Ne,qe,q,K,se,Ce,Me,ze.data):T.isCompressedArrayTexture?F.compressedTexSubImage3D(Ve,Y,we,Ne,qe,q,K,se,Ce,ze.data):F.texSubImage3D(Ve,Y,we,Ne,qe,q,K,se,Ce,Me,ze):d.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,we,Ne,q,K,Ce,Me,ze.data):d.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,we,Ne,ze.width,ze.height,Ce,ze.data):F.texSubImage2D(F.TEXTURE_2D,Y,we,Ne,q,K,Ce,Me,ze);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ge),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,un),Y===0&&T.generateMipmaps&&F.generateMipmap(Ve),Pe.unbindTexture()},this.initRenderTarget=function(d){x.get(d).__webglFramebuffer===void 0&&k.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?k.setTextureCube(d,0):d.isData3DTexture?k.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?k.setTexture2DArray(d,0):k.setTexture2D(d,0),Pe.unbindTexture()},this.resetState=function(){B=0,G=0,X=null,Pe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Pl={type:"change"},Co={type:"start"},pc={type:"end"},lr=new Jl,Dl=new ei,x_=Math.cos(70*jl.DEG2RAD),wt=new z,Xt=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},la=1e-6;class v_ extends Mu{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new vi,this._lastTargetPosition=new z,this._quat=new vi().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new al,this._sphericalDelta=new al,this._scale=1,this._panOffset=new z,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new z,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S_.bind(this),this._onPointerDown=M_.bind(this),this._onPointerUp=E_.bind(this),this._onContextMenu=R_.bind(this),this._onMouseWheel=T_.bind(this),this._onKeyDown=A_.bind(this),this._onTouchStart=w_.bind(this),this._onTouchMove=C_.bind(this),this._onMouseDown=y_.bind(this),this._onMouseMove=b_.bind(this),this._interceptControlDown=P_.bind(this),this._interceptControlUp=D_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pl),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lr.origin.copy(this.object.position),lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lr.direction))<x_?this.object.lookAt(this.target):(Dl.setFromNormalAndCoplanarPoint(this.object.up,this.target),lr.intersectPlane(Dl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>la||8*(1-this._lastQuaternion.dot(this.object.quaternion))>la||this._lastTargetPosition.distanceToSquared(this.target)>la?(this.dispatchEvent(Pl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function M_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function S_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function E_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pc),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function y_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=mt.DOLLY;break;case Yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}break;case Yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Co)}function b_(i){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function T_(i){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(i.preventDefault(),this.dispatchEvent(Co),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pc))}function A_(i){this.enabled!==!1&&this._handleKeyDown(i)}function w_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=mt.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=mt.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Co)}function C_(i){switch(this._trackPointer(i),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=mt.NONE}}function R_(i){this.enabled!==!1&&i.preventDefault()}function P_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var an=Uint8Array,Xi=Uint16Array,L_=Int32Array,mc=new an([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_c=new an([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),I_=new an([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gc=function(i,e){for(var t=new Xi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new L_(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},xc=gc(mc,2),vc=xc.b,U_=xc.r;vc[28]=258,U_[258]=28;var N_=gc(_c,0),F_=N_.b,ao=new Xi(32768);for(var _t=0;_t<32768;++_t){var Qn=(_t&43690)>>1|(_t&21845)<<1;Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,ao[_t]=((Qn&65280)>>8|(Qn&255)<<8)>>1}var Es=(function(i,e,t){for(var n=i.length,s=0,r=new Xi(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new Xi(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Xi(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],u=e-i[s],h=a[i[s]-1]++<<u,m=h|(1<<u)-1;h<=m;++h)o[ao[h]>>c]=l}else for(o=new Xi(n),s=0;s<n;++s)i[s]&&(o[s]=ao[a[i[s]-1]++]>>15-i[s]);return o}),Us=new an(288);for(var _t=0;_t<144;++_t)Us[_t]=8;for(var _t=144;_t<256;++_t)Us[_t]=9;for(var _t=256;_t<280;++_t)Us[_t]=7;for(var _t=280;_t<288;++_t)Us[_t]=8;var Mc=new an(32);for(var _t=0;_t<32;++_t)Mc[_t]=5;var O_=Es(Us,9,1),B_=Es(Mc,5,1),ca=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},mn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ha=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},z_=function(i){return(i+7)/8|0},k_=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new an(i.subarray(e,t))},H_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_n=function(i,e,t){var n=new Error(e||H_[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,_n),!t)throw n;return n},V_=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new an(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new an(s*3));var l=function(et){var gt=t.length;if(et>gt){var $e=new an(Math.max(gt*2,et));$e.set(t),t=$e}},u=e.f||0,h=e.p||0,m=e.b||0,_=e.l,S=e.d,E=e.m,g=e.n,p=s*8;do{if(!_){u=mn(i,h,1);var L=mn(i,h+1,3);if(h+=3,L)if(L==1)_=O_,S=B_,E=9,g=5;else if(L==2){var U=mn(i,h,31)+257,N=mn(i,h+10,15)+4,V=U+mn(i,h+5,31)+1;h+=14;for(var v=new an(V),y=new an(19),B=0;B<N;++B)y[I_[B]]=mn(i,h+B*3,7);h+=N*3;for(var G=ca(y),X=(1<<G)-1,ee=Es(y,G,1),B=0;B<V;){var te=ee[mn(i,h,X)];h+=te&15;var P=te>>4;if(P<16)v[B++]=P;else{var $=0,Z=0;for(P==16?(Z=3+mn(i,h,3),h+=2,$=v[B-1]):P==17?(Z=3+mn(i,h,7),h+=3):P==18&&(Z=11+mn(i,h,127),h+=7);Z--;)v[B++]=$}}var ce=v.subarray(0,U),xe=v.subarray(U);E=ca(ce),g=ca(xe),_=Es(ce,E,1),S=Es(xe,g,1)}else _n(1);else{var P=z_(h)+4,w=i[P-4]|i[P-3]<<8,I=P+w;if(I>s){c&&_n(0);break}o&&l(m+w),t.set(i.subarray(P,I),m),e.b=m+=w,e.p=h=I*8,e.f=u;continue}if(h>p){c&&_n(0);break}}o&&l(m+131072);for(var _e=(1<<E)-1,ye=(1<<g)-1,Be=h;;Be=h){var $=_[ha(i,h)&_e],ke=$>>4;if(h+=$&15,h>p){c&&_n(0);break}if($||_n(2),ke<256)t[m++]=ke;else if(ke==256){Be=h,_=null;break}else{var ht=ke-254;if(ke>264){var B=ke-257,it=mc[B];ht=mn(i,h,(1<<it)-1)+vc[B],h+=it}var j=S[ha(i,h)&ye],oe=j>>4;j||_n(3),h+=j&15;var xe=F_[oe];if(oe>3){var it=_c[oe];xe+=ha(i,h)&(1<<it)-1,h+=it}if(h>p){c&&_n(0);break}o&&l(m+131072);var Ae=m+ht;if(m<xe){var Xe=r-xe,Re=Math.min(xe,Ae);for(Xe+m<0&&_n(3);m<Re;++m)t[m]=n[Xe+m]}for(;m<Ae;++m)t[m]=t[m-xe]}}e.l=_,e.p=Be,e.b=m,e.f=u,_&&(u=1,e.m=E,e.d=S,e.n=g)}while(!u);return m!=t.length&&a?k_(t,0,m):t.subarray(0,m)},G_=new an(0),W_=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&_n(6,"invalid zlib data"),(i[1]>>5&1)==1&&_n(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function cr(i,e){return V_(i.subarray(W_(i),-4),{i:2},e,e)}var X_=typeof TextDecoder<"u"&&new TextDecoder,Y_=0;try{X_.decode(G_,{stream:!0}),Y_=1}catch{}class q_ extends fu{constructor(e){super(e),this.type=It,this.outputFormat=Dt}parse(e){const v=Math.pow(2.7182818,2.2);function y(f,M){let D=0;for(let ne=0;ne<65536;++ne)(ne==0||f[ne>>3]&1<<(ne&7))&&(M[D++]=ne);const H=D-1;for(;D<65536;)M[D++]=0;return H}function B(f){for(let M=0;M<16384;M++)f[M]={},f[M].len=0,f[M].lit=0,f[M].p=null}const G={l:0,c:0,lc:0};function X(f,M,D,H,ne){for(;D<f;)M=M<<8|Le(H,ne),D+=8;D-=f,G.l=M>>D&(1<<f)-1,G.c=M,G.lc=D}const ee=new Array(59);function te(f){for(let D=0;D<=58;++D)ee[D]=0;for(let D=0;D<65537;++D)ee[f[D]]+=1;let M=0;for(let D=58;D>0;--D){const H=M+ee[D]>>1;ee[D]=M,M=H}for(let D=0;D<65537;++D){const H=f[D];H>0&&(f[D]=H|ee[H]++<<6)}}function $(f,M,D,H,ne,de){const d=M;let T=0,R=0;for(;H<=ne;H++){if(d.value-M.value>D)return!1;X(6,T,R,f,d);const C=G.l;if(T=G.c,R=G.lc,de[H]=C,C==63){if(d.value-M.value>D)throw new Error("Something wrong with hufUnpackEncTable");X(8,T,R,f,d);let A=G.l+6;if(T=G.c,R=G.lc,H+A>ne+1)throw new Error("Something wrong with hufUnpackEncTable");for(;A--;)de[H++]=0;H--}else if(C>=59){let A=C-59+2;if(H+A>ne+1)throw new Error("Something wrong with hufUnpackEncTable");for(;A--;)de[H++]=0;H--}}te(de)}function Z(f){return f&63}function ce(f){return f>>6}function xe(f,M,D,H){for(;M<=D;M++){const ne=ce(f[M]),de=Z(f[M]);if(ne>>de)throw new Error("Invalid table entry");if(de>14){const d=H[ne>>de-14];if(d.len)throw new Error("Invalid table entry");if(d.lit++,d.p){const T=d.p;d.p=new Array(d.lit);for(let R=0;R<d.lit-1;++R)d.p[R]=T[R]}else d.p=new Array(1);d.p[d.lit-1]=M}else if(de){let d=0;for(let T=1<<14-de;T>0;T--){const R=H[(ne<<14-de)+d];if(R.len||R.p)throw new Error("Invalid table entry");R.len=de,R.lit=M,d++}}}return!0}const _e={c:0,lc:0};function ye(f,M,D,H){f=f<<8|Le(D,H),M+=8,_e.c=f,_e.lc=M}const Be={c:0,lc:0};function ke(f,M,D,H,ne,de,d,T,R){if(f==M){H<8&&(ye(D,H,ne,de),D=_e.c,H=_e.lc),H-=8;let C=D>>H;if(C=new Uint8Array([C])[0],T.value+C>R)return!1;const A=d[T.value-1];for(;C-- >0;)d[T.value++]=A}else if(T.value<R)d[T.value++]=f;else return!1;Be.c=D,Be.lc=H}function ht(f){return f&65535}function it(f){const M=ht(f);return M>32767?M-65536:M}const j={a:0,b:0};function oe(f,M){const D=it(f),ne=it(M),de=D+(ne&1)+(ne>>1),d=de,T=de-ne;j.a=d,j.b=T}function Ae(f,M){const D=ht(f),H=ht(M),ne=D-(H>>1)&65535,de=H+ne-32768&65535;j.a=de,j.b=ne}function Xe(f,M,D,H,ne,de,d){const T=d<16384,R=D>ne?ne:D;let C=1,A,Y;for(;C<=R;)C<<=1;for(C>>=1,A=C,C>>=1;C>=1;){Y=0;const q=Y+de*(ne-A),K=de*C,se=de*A,J=H*C,re=H*A;let he,we,Ne,qe;for(;Y<=q;Y+=se){let ze=Y;const Ce=Y+H*(D-A);for(;ze<=Ce;ze+=re){const Me=ze+J,Ve=ze+K,Ue=Ve+J;T?(oe(f[ze+M],f[Ve+M]),he=j.a,Ne=j.b,oe(f[Me+M],f[Ue+M]),we=j.a,qe=j.b,oe(he,we),f[ze+M]=j.a,f[Me+M]=j.b,oe(Ne,qe),f[Ve+M]=j.a,f[Ue+M]=j.b):(Ae(f[ze+M],f[Ve+M]),he=j.a,Ne=j.b,Ae(f[Me+M],f[Ue+M]),we=j.a,qe=j.b,Ae(he,we),f[ze+M]=j.a,f[Me+M]=j.b,Ae(Ne,qe),f[Ve+M]=j.a,f[Ue+M]=j.b)}if(D&C){const Me=ze+K;T?oe(f[ze+M],f[Me+M]):Ae(f[ze+M],f[Me+M]),he=j.a,f[Me+M]=j.b,f[ze+M]=he}}if(ne&C){let ze=Y;const Ce=Y+H*(D-A);for(;ze<=Ce;ze+=re){const Me=ze+J;T?oe(f[ze+M],f[Me+M]):Ae(f[ze+M],f[Me+M]),he=j.a,f[Me+M]=j.b,f[ze+M]=he}}A=C,C>>=1}return Y}function Re(f,M,D,H,ne,de,d,T,R){let C=0,A=0;const Y=d,q=Math.trunc(H.value+(ne+7)/8);for(;H.value<q;)for(ye(C,A,D,H),C=_e.c,A=_e.lc;A>=14;){const se=C>>A-14&16383,J=M[se];if(J.len)A-=J.len,ke(J.lit,de,C,A,D,H,T,R,Y),C=Be.c,A=Be.lc;else{if(!J.p)throw new Error("hufDecode issues");let re;for(re=0;re<J.lit;re++){const he=Z(f[J.p[re]]);for(;A<he&&H.value<q;)ye(C,A,D,H),C=_e.c,A=_e.lc;if(A>=he&&ce(f[J.p[re]])==(C>>A-he&(1<<he)-1)){A-=he,ke(J.p[re],de,C,A,D,H,T,R,Y),C=Be.c,A=Be.lc;break}}if(re==J.lit)throw new Error("hufDecode issues")}}const K=8-ne&7;for(C>>=K,A-=K;A>0;){const se=M[C<<14-A&16383];if(se.len)A-=se.len,ke(se.lit,de,C,A,D,H,T,R,Y),C=Be.c,A=Be.lc;else throw new Error("hufDecode issues")}return!0}function et(f,M,D,H,ne,de){const d={value:0},T=D.value,R=Se(M,D),C=Se(M,D);D.value+=4;const A=Se(M,D);if(D.value+=4,R<0||R>=65537||C<0||C>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Y=new Array(65537),q=new Array(16384);B(q);const K=H-(D.value-T);if($(f,D,K,R,C,Y),A>8*(H-(D.value-T)))throw new Error("Something wrong with hufUncompress");xe(Y,R,C,q),Re(Y,q,f,D,A,C,de,ne,d)}function gt(f,M,D){for(let H=0;H<D;++H)M[H]=f[M[H]]}function $e(f){for(let M=1;M<f.length;M++){const D=f[M-1]+f[M]-128;f[M]=D}}function ot(f,M){let D=0,H=Math.floor((f.length+1)/2),ne=0;const de=f.length-1;for(;!(ne>de||(M[ne++]=f[D++],ne>de));)M[ne++]=f[H++]}function ut(f){let M=f.byteLength;const D=new Array;let H=0;const ne=new DataView(f);for(;M>0;){const de=ne.getInt8(H++);if(de<0){const d=-de;M-=d+1;for(let T=0;T<d;T++)D.push(ne.getUint8(H++))}else{const d=de;M-=2;const T=ne.getUint8(H++);for(let R=0;R<d+1;R++)D.push(T)}}return D}function Ze(f,M,D,H,ne,de){let d=new DataView(de.buffer);const T=D[f.idx[0]].width,R=D[f.idx[0]].height,C=3,A=Math.floor(T/8),Y=Math.ceil(T/8),q=Math.ceil(R/8),K=T-(Y-1)*8,se=R-(q-1)*8,J={value:0},re=new Array(C),he=new Array(C),we=new Array(C),Ne=new Array(C),qe=new Array(C);for(let Ce=0;Ce<C;++Ce)qe[Ce]=M[f.idx[Ce]],re[Ce]=Ce<1?0:re[Ce-1]+Y*q,he[Ce]=new Float32Array(64),we[Ce]=new Uint16Array(64),Ne[Ce]=new Uint16Array(Y*64);for(let Ce=0;Ce<q;++Ce){let Me=8;Ce==q-1&&(Me=se);let Ve=8;for(let Ge=0;Ge<Y;++Ge){Ge==Y-1&&(Ve=K);for(let rt=0;rt<C;++rt)we[rt].fill(0),we[rt][0]=ne[re[rt]++],F(J,H,we[rt]),xt(we[rt],he[rt]),st(he[rt]);dt(he);for(let rt=0;rt<C;++rt)Pe(he[rt],Ne[rt],Ge*64)}let Ue=0;for(let Ge=0;Ge<C;++Ge){const rt=D[f.idx[Ge]].type;for(let vt=8*Ce;vt<8*Ce+Me;++vt){Ue=qe[Ge][vt];for(let un=0;un<A;++un){const nt=un*64+(vt&7)*8;d.setUint16(Ue+0*rt,Ne[Ge][nt+0],!0),d.setUint16(Ue+2*rt,Ne[Ge][nt+1],!0),d.setUint16(Ue+4*rt,Ne[Ge][nt+2],!0),d.setUint16(Ue+6*rt,Ne[Ge][nt+3],!0),d.setUint16(Ue+8*rt,Ne[Ge][nt+4],!0),d.setUint16(Ue+10*rt,Ne[Ge][nt+5],!0),d.setUint16(Ue+12*rt,Ne[Ge][nt+6],!0),d.setUint16(Ue+14*rt,Ne[Ge][nt+7],!0),Ue+=16*rt}}if(A!=Y)for(let vt=8*Ce;vt<8*Ce+Me;++vt){const un=qe[Ge][vt]+8*A*2*rt,nt=A*64+(vt&7)*8;for(let At=0;At<Ve;++At)d.setUint16(un+At*2*rt,Ne[Ge][nt+At],!0)}}}const ze=new Uint16Array(T);d=new DataView(de.buffer);for(let Ce=0;Ce<C;++Ce){D[f.idx[Ce]].decoded=!0;const Me=D[f.idx[Ce]].type;if(D[Ce].type==2)for(let Ve=0;Ve<R;++Ve){const Ue=qe[Ce][Ve];for(let Ge=0;Ge<T;++Ge)ze[Ge]=d.getUint16(Ue+Ge*2*Me,!0);for(let Ge=0;Ge<T;++Ge)d.setFloat32(Ue+Ge*2*Me,W(ze[Ge]),!0)}}}function Mt(f,M,D,H,ne,de){const d=new DataView(de.buffer),T=D[f],R=T.width,C=T.height,A=Math.ceil(R/8),Y=Math.ceil(C/8),q=Math.floor(R/8),K=R-(A-1)*8,se=C-(Y-1)*8,J={value:0};let re=0;const he=new Float32Array(64),we=new Uint16Array(64),Ne=new Uint16Array(A*64);for(let qe=0;qe<Y;++qe){let ze=8;qe==Y-1&&(ze=se);for(let Ce=0;Ce<A;++Ce)we.fill(0),we[0]=ne[re++],F(J,H,we),xt(we,he),st(he),Pe(he,Ne,Ce*64);for(let Ce=8*qe;Ce<8*qe+ze;++Ce){let Me=M[f][Ce];for(let Ve=0;Ve<q;++Ve){const Ue=Ve*64+(Ce&7)*8;for(let Ge=0;Ge<8;++Ge)d.setUint16(Me+Ge*2*T.type,Ne[Ue+Ge],!0);Me+=16*T.type}if(A!=q){const Ve=q*64+(Ce&7)*8;for(let Ue=0;Ue<K;++Ue)d.setUint16(Me+Ue*2*T.type,Ne[Ve+Ue],!0)}}}T.decoded=!0}function F(f,M,D){let H,ne=1;for(;ne<64;)H=M[f.value],H==65280?ne=64:H>>8==255?ne+=H&255:(D[ne]=H,ne++),f.value++}function xt(f,M){M[0]=W(f[0]),M[1]=W(f[1]),M[2]=W(f[5]),M[3]=W(f[6]),M[4]=W(f[14]),M[5]=W(f[15]),M[6]=W(f[27]),M[7]=W(f[28]),M[8]=W(f[2]),M[9]=W(f[4]),M[10]=W(f[7]),M[11]=W(f[13]),M[12]=W(f[16]),M[13]=W(f[26]),M[14]=W(f[29]),M[15]=W(f[42]),M[16]=W(f[3]),M[17]=W(f[8]),M[18]=W(f[12]),M[19]=W(f[17]),M[20]=W(f[25]),M[21]=W(f[30]),M[22]=W(f[41]),M[23]=W(f[43]),M[24]=W(f[9]),M[25]=W(f[11]),M[26]=W(f[18]),M[27]=W(f[24]),M[28]=W(f[31]),M[29]=W(f[40]),M[30]=W(f[44]),M[31]=W(f[53]),M[32]=W(f[10]),M[33]=W(f[19]),M[34]=W(f[23]),M[35]=W(f[32]),M[36]=W(f[39]),M[37]=W(f[45]),M[38]=W(f[52]),M[39]=W(f[54]),M[40]=W(f[20]),M[41]=W(f[22]),M[42]=W(f[33]),M[43]=W(f[38]),M[44]=W(f[46]),M[45]=W(f[51]),M[46]=W(f[55]),M[47]=W(f[60]),M[48]=W(f[21]),M[49]=W(f[34]),M[50]=W(f[37]),M[51]=W(f[47]),M[52]=W(f[50]),M[53]=W(f[56]),M[54]=W(f[59]),M[55]=W(f[61]),M[56]=W(f[35]),M[57]=W(f[36]),M[58]=W(f[48]),M[59]=W(f[49]),M[60]=W(f[57]),M[61]=W(f[58]),M[62]=W(f[62]),M[63]=W(f[63])}function st(f){const M=.5*Math.cos(.7853975),D=.5*Math.cos(3.14159/16),H=.5*Math.cos(3.14159/8),ne=.5*Math.cos(3*3.14159/16),de=.5*Math.cos(5*3.14159/16),d=.5*Math.cos(3*3.14159/8),T=.5*Math.cos(7*3.14159/16),R=new Array(4),C=new Array(4),A=new Array(4),Y=new Array(4);for(let q=0;q<8;++q){const K=q*8;R[0]=H*f[K+2],R[1]=d*f[K+2],R[2]=H*f[K+6],R[3]=d*f[K+6],C[0]=D*f[K+1]+ne*f[K+3]+de*f[K+5]+T*f[K+7],C[1]=ne*f[K+1]-T*f[K+3]-D*f[K+5]-de*f[K+7],C[2]=de*f[K+1]-D*f[K+3]+T*f[K+5]+ne*f[K+7],C[3]=T*f[K+1]-de*f[K+3]+ne*f[K+5]-D*f[K+7],A[0]=M*(f[K+0]+f[K+4]),A[3]=M*(f[K+0]-f[K+4]),A[1]=R[0]+R[3],A[2]=R[1]-R[2],Y[0]=A[0]+A[1],Y[1]=A[3]+A[2],Y[2]=A[3]-A[2],Y[3]=A[0]-A[1],f[K+0]=Y[0]+C[0],f[K+1]=Y[1]+C[1],f[K+2]=Y[2]+C[2],f[K+3]=Y[3]+C[3],f[K+4]=Y[3]-C[3],f[K+5]=Y[2]-C[2],f[K+6]=Y[1]-C[1],f[K+7]=Y[0]-C[0]}for(let q=0;q<8;++q)R[0]=H*f[16+q],R[1]=d*f[16+q],R[2]=H*f[48+q],R[3]=d*f[48+q],C[0]=D*f[8+q]+ne*f[24+q]+de*f[40+q]+T*f[56+q],C[1]=ne*f[8+q]-T*f[24+q]-D*f[40+q]-de*f[56+q],C[2]=de*f[8+q]-D*f[24+q]+T*f[40+q]+ne*f[56+q],C[3]=T*f[8+q]-de*f[24+q]+ne*f[40+q]-D*f[56+q],A[0]=M*(f[q]+f[32+q]),A[3]=M*(f[q]-f[32+q]),A[1]=R[0]+R[3],A[2]=R[1]-R[2],Y[0]=A[0]+A[1],Y[1]=A[3]+A[2],Y[2]=A[3]-A[2],Y[3]=A[0]-A[1],f[0+q]=Y[0]+C[0],f[8+q]=Y[1]+C[1],f[16+q]=Y[2]+C[2],f[24+q]=Y[3]+C[3],f[32+q]=Y[3]-C[3],f[40+q]=Y[2]-C[2],f[48+q]=Y[1]-C[1],f[56+q]=Y[0]-C[0]}function dt(f){for(let M=0;M<64;++M){const D=f[0][M],H=f[1][M],ne=f[2][M];f[0][M]=D+1.5747*ne,f[1][M]=D-.1873*H-.4682*ne,f[2][M]=D+1.8556*H}}function Pe(f,M,D){for(let H=0;H<64;++H)M[D+H]=Jo.toHalfFloat(b(f[H]))}function b(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(v,Math.abs(f)-1)}function x(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function k(f){const M=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),D=new Uint8Array(ut(M)),H=new Uint8Array(D.length);return $e(D),ot(D,H),new DataView(H.buffer)}function ie(f){const M=f.array.slice(f.offset.value,f.offset.value+f.size),D=cr(M),H=new Uint8Array(D.length);return $e(D),ot(D,H),new DataView(H.buffer)}function le(f){const M=f.viewer,D={value:f.offset.value},H=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),ne=new Uint8Array(8192);let de=0;const d=new Array(f.inputChannels.length);for(let se=0,J=f.inputChannels.length;se<J;se++)d[se]={},d[se].start=de,d[se].end=d[se].start,d[se].nx=f.columns,d[se].ny=f.lines,d[se].size=f.type,de+=d[se].nx*d[se].ny*d[se].size;const T=Te(M,D),R=Te(M,D);if(R>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(T<=R)for(let se=0;se<R-T+1;se++)ne[se+T]=me(M,D);const C=new Uint16Array(65536),A=y(ne,C),Y=Se(M,D);et(f.array,M,D,Y,H,de);for(let se=0;se<f.inputChannels.length;++se){const J=d[se];for(let re=0;re<d[se].size;++re)Xe(H,J.start+re,J.nx,J.size,J.ny,J.nx*J.size,A)}gt(C,H,de);let q=0;const K=new Uint8Array(H.buffer.byteLength);for(let se=0;se<f.lines;se++)for(let J=0;J<f.inputChannels.length;J++){const re=d[J],he=re.nx*re.size,we=new Uint8Array(H.buffer,re.end*2,he*2);K.set(we,q),q+=he*2,re.end+=he}return new DataView(K.buffer)}function Q(f){const M=f.array.slice(f.offset.value,f.offset.value+f.size),D=cr(M),H=f.inputChannels.length*f.lines*f.columns*f.totalBytes,ne=new ArrayBuffer(H),de=new DataView(ne);let d=0,T=0;const R=new Array(4);for(let C=0;C<f.lines;C++)for(let A=0;A<f.inputChannels.length;A++){let Y=0;switch(f.inputChannels[A].pixelType){case 1:R[0]=d,R[1]=R[0]+f.columns,d=R[1]+f.columns;for(let K=0;K<f.columns;++K){const se=D[R[0]++]<<8|D[R[1]++];Y+=se,de.setUint16(T,Y,!0),T+=2}break;case 2:R[0]=d,R[1]=R[0]+f.columns,R[2]=R[1]+f.columns,d=R[2]+f.columns;for(let K=0;K<f.columns;++K){const se=D[R[0]++]<<24|D[R[1]++]<<16|D[R[2]++]<<8;Y+=se,de.setUint32(T,Y,!0),T+=4}break}}return de}function Ie(f){const M=f.viewer,D={value:f.offset.value},H=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),ne={version:Oe(M,D),unknownUncompressedSize:Oe(M,D),unknownCompressedSize:Oe(M,D),acCompressedSize:Oe(M,D),dcCompressedSize:Oe(M,D),rleCompressedSize:Oe(M,D),rleUncompressedSize:Oe(M,D),rleRawSize:Oe(M,D),totalAcUncompressedCount:Oe(M,D),totalDcUncompressedCount:Oe(M,D),acCompression:Oe(M,D)};if(ne.version<2)throw new Error("EXRLoader.parse: "+En.compression+" version "+ne.version+" is unsupported");const de=new Array;let d=Te(M,D)-2;for(;d>0;){const J=ge(M.buffer,D),re=me(M,D),he=re>>2&3,we=(re>>4)-1,Ne=new Int8Array([we])[0],qe=me(M,D);de.push({name:J,index:Ne,type:qe,compression:he}),d-=J.length+3}const T=En.channels,R=new Array(f.inputChannels.length);for(let J=0;J<f.inputChannels.length;++J){const re=R[J]={},he=T[J];re.name=he.name,re.compression=0,re.decoded=!1,re.type=he.pixelType,re.pLinear=he.pLinear,re.width=f.columns,re.height=f.lines}const C={idx:new Array(3)};for(let J=0;J<f.inputChannels.length;++J){const re=R[J];for(let he=0;he<de.length;++he){const we=de[he];re.name==we.name&&(re.compression=we.compression,we.index>=0&&(C.idx[we.index]=J),re.offset=J)}}let A,Y,q;if(ne.acCompressedSize>0)switch(ne.acCompression){case 0:A=new Uint16Array(ne.totalAcUncompressedCount),et(f.array,M,D,ne.acCompressedSize,A,ne.totalAcUncompressedCount);break;case 1:const J=f.array.slice(D.value,D.value+ne.totalAcUncompressedCount),re=cr(J);A=new Uint16Array(re.buffer),D.value+=ne.totalAcUncompressedCount;break}if(ne.dcCompressedSize>0){const J={array:f.array,offset:D,size:ne.dcCompressedSize};Y=new Uint16Array(ie(J).buffer),D.value+=ne.dcCompressedSize}if(ne.rleRawSize>0){const J=f.array.slice(D.value,D.value+ne.rleCompressedSize),re=cr(J);q=ut(re.buffer),D.value+=ne.rleCompressedSize}let K=0;const se=new Array(R.length);for(let J=0;J<se.length;++J)se[J]=new Array;for(let J=0;J<f.lines;++J)for(let re=0;re<R.length;++re)se[re].push(K),K+=R[re].width*f.type*2;C.idx[0]!==void 0&&R[C.idx[0]]&&Ze(C,se,R,A,Y,H);for(let J=0;J<R.length;++J){const re=R[J];if(!re.decoded)switch(re.compression){case 2:let he=0,we=0;for(let Ne=0;Ne<f.lines;++Ne){let qe=se[J][he];for(let ze=0;ze<re.width;++ze){for(let Ce=0;Ce<2*re.type;++Ce)H[qe++]=q[we+Ce*re.width*re.height];we++}he++}break;case 1:Mt(J,se,R,A,Y,H);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(H.buffer)}function ge(f,M){const D=new Uint8Array(f);let H=0;for(;D[M.value+H]!=0;)H+=1;const ne=new TextDecoder().decode(D.slice(M.value,M.value+H));return M.value=M.value+H+1,ne}function De(f,M,D){const H=new TextDecoder().decode(new Uint8Array(f).slice(M.value,M.value+D));return M.value=M.value+D,H}function He(f,M){const D=pe(f,M),H=Se(f,M);return[D,H]}function fe(f,M){const D=Se(f,M),H=Se(f,M);return[D,H]}function pe(f,M){const D=f.getInt32(M.value,!0);return M.value=M.value+4,D}function Se(f,M){const D=f.getUint32(M.value,!0);return M.value=M.value+4,D}function Le(f,M){const D=f[M.value];return M.value=M.value+1,D}function me(f,M){const D=f.getUint8(M.value);return M.value=M.value+1,D}const Oe=function(f,M){let D;return"getBigInt64"in DataView.prototype?D=Number(f.getBigInt64(M.value,!0)):D=f.getUint32(M.value+4,!0)+Number(f.getUint32(M.value,!0)<<32),M.value+=8,D};function O(f,M){const D=f.getFloat32(M.value,!0);return M.value+=4,D}function be(f,M){return Jo.toHalfFloat(O(f,M))}function W(f){const M=(f&31744)>>10,D=f&1023;return(f>>15?-1:1)*(M?M===31?D?NaN:1/0:Math.pow(2,M-15)*(1+D/1024):6103515625e-14*(D/1024))}function Te(f,M){const D=f.getUint16(M.value,!0);return M.value+=2,D}function ue(f,M){return W(Te(f,M))}function ae(f,M,D,H){const ne=D.value,de=[];for(;D.value<ne+H-1;){const d=ge(M,D),T=pe(f,D),R=me(f,D);D.value+=3;const C=pe(f,D),A=pe(f,D);de.push({name:d,pixelType:T,pLinear:R,xSampling:C,ySampling:A})}return D.value+=1,de}function ve(f,M){const D=O(f,M),H=O(f,M),ne=O(f,M),de=O(f,M),d=O(f,M),T=O(f,M),R=O(f,M),C=O(f,M);return{redX:D,redY:H,greenX:ne,greenY:de,blueX:d,blueY:T,whiteX:R,whiteY:C}}function Ye(f,M){const D=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],H=me(f,M);return D[H]}function pt(f,M){const D=pe(f,M),H=pe(f,M),ne=pe(f,M),de=pe(f,M);return{xMin:D,yMin:H,xMax:ne,yMax:de}}function ct(f,M){const D=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],H=me(f,M);return D[H]}function tn(f,M){const D=["ENVMAP_LATLONG","ENVMAP_CUBE"],H=me(f,M);return D[H]}function cn(f,M){const D=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],H=["ROUND_DOWN","ROUND_UP"],ne=Se(f,M),de=Se(f,M),d=me(f,M);return{xSize:ne,ySize:de,levelMode:D[d&15],roundingMode:H[d>>4]}}function Rr(f,M){const D=O(f,M),H=O(f,M);return[D,H]}function Bs(f,M){const D=O(f,M),H=O(f,M),ne=O(f,M);return[D,H,ne]}function as(f,M,D,H,ne){if(H==="string"||H==="stringvector"||H==="iccProfile")return De(M,D,ne);if(H==="chlist")return ae(f,M,D,ne);if(H==="chromaticities")return ve(f,D);if(H==="compression")return Ye(f,D);if(H==="box2i")return pt(f,D);if(H==="envmap")return tn(f,D);if(H==="tiledesc")return cn(f,D);if(H==="lineOrder")return ct(f,D);if(H==="float")return O(f,D);if(H==="v2f")return Rr(f,D);if(H==="v3f")return Bs(f,D);if(H==="int")return pe(f,D);if(H==="rational")return He(f,D);if(H==="timecode")return fe(f,D);if(H==="preview")return D.value+=ne,"skipped";D.value+=ne}function Pr(f,M){const D=Math.log2(f);return M=="ROUND_DOWN"?Math.floor(D):Math.ceil(D)}function zs(f,M,D){let H=0;switch(f.levelMode){case"ONE_LEVEL":H=1;break;case"MIPMAP_LEVELS":H=Pr(Math.max(M,D),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return H}function os(f,M,D,H){const ne=new Array(f);for(let de=0;de<f;de++){const d=1<<de;let T=M/d|0;H=="ROUND_UP"&&T*d<M&&(T+=1);const R=Math.max(T,1);ne[de]=(R+D-1)/D|0}return ne}function Un(){const f=this,M=f.offset,D={value:0};for(let H=0;H<f.tileCount;H++){const ne=pe(f.viewer,M),de=pe(f.viewer,M);M.value+=8,f.size=Se(f.viewer,M);const d=ne*f.blockWidth,T=de*f.blockHeight;f.columns=d+f.blockWidth>f.width?f.width-d:f.blockWidth,f.lines=T+f.blockHeight>f.height?f.height-T:f.blockHeight;const R=f.columns*f.totalBytes,A=f.size<f.lines*R?f.uncompress(f):x(f);M.value+=f.size;for(let Y=0;Y<f.lines;Y++){const q=Y*f.columns*f.totalBytes;for(let K=0;K<f.inputChannels.length;K++){const se=En.channels[K].name,J=f.channelByteOffsets[se]*f.columns,re=f.decodeChannels[se];if(re===void 0)continue;D.value=q+J;const he=(f.height-(1+T+Y))*f.outLineWidth;for(let we=0;we<f.columns;we++){const Ne=he+(we+d)*f.outputChannels+re;f.byteArray[Ne]=f.getter(A,D)}}}}}function ls(){const f=this,M=f.offset,D={value:0};for(let H=0;H<f.height/f.blockHeight;H++){const ne=pe(f.viewer,M)-En.dataWindow.yMin;f.size=Se(f.viewer,M),f.lines=ne+f.blockHeight>f.height?f.height-ne:f.blockHeight;const de=f.columns*f.totalBytes,T=f.size<f.lines*de?f.uncompress(f):x(f);M.value+=f.size;for(let R=0;R<f.blockHeight;R++){const C=H*f.blockHeight,A=R+f.scanOrder(C);if(A>=f.height)continue;const Y=R*de,q=(f.height-1-A)*f.outLineWidth;for(let K=0;K<f.inputChannels.length;K++){const se=En.channels[K].name,J=f.channelByteOffsets[se]*f.columns,re=f.decodeChannels[se];if(re!==void 0){D.value=Y+J;for(let he=0;he<f.columns;he++){const we=q+he*f.outputChannels+re;f.byteArray[we]=f.getter(T,D)}}}}}}function ks(f,M,D){const H={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");H.version=f.getUint8(4);const ne=f.getUint8(5);H.spec={singleTile:!!(ne&2),longName:!!(ne&4),deepFormat:!!(ne&8),multiPart:!!(ne&16)},D.value=8;let de=!0;for(;de;){const d=ge(M,D);if(d==="")de=!1;else{const T=ge(M,D),R=Se(f,D),C=as(f,M,D,T,R);C===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${T}'.`):H[d]=C}}if((ne&-7)!=0)throw console.error("THREE.EXRHeader:",H),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return H}function Hs(f,M,D,H,ne,de){const d={size:0,viewer:M,array:D,offset:H,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:$t};switch(f.compression){case"NO_COMPRESSION":d.blockHeight=1,d.uncompress=x;break;case"RLE_COMPRESSION":d.blockHeight=1,d.uncompress=k;break;case"ZIPS_COMPRESSION":d.blockHeight=1,d.uncompress=ie;break;case"ZIP_COMPRESSION":d.blockHeight=16,d.uncompress=ie;break;case"PIZ_COMPRESSION":d.blockHeight=32,d.uncompress=le;break;case"PXR24_COMPRESSION":d.blockHeight=16,d.uncompress=Q;break;case"DWAA_COMPRESSION":d.blockHeight=32,d.uncompress=Ie;break;case"DWAB_COMPRESSION":d.blockHeight=256,d.uncompress=Ie;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const T={};for(const q of f.channels)switch(q.name){case"Y":case"R":case"G":case"B":case"A":T[q.name]=!0,d.type=q.pixelType}let R=!1,C=!1;if(T.R&&T.G&&T.B)d.outputChannels=4;else if(T.Y)d.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(d.outputChannels){case 4:de==Dt?(R=!T.A,d.format=Dt,d.colorSpace=$t,d.outputChannels=4,d.decodeChannels={R:0,G:1,B:2,A:3}):de==gn?(d.format=gn,d.colorSpace=$t,d.outputChannels=2,d.decodeChannels={R:0,G:1}):de==Gi?(d.format=Gi,d.colorSpace=$t,d.outputChannels=1,d.decodeChannels={R:0}):C=!0;break;case 1:de==Dt?(R=!0,d.format=Dt,d.colorSpace=$t,d.outputChannels=4,d.shouldExpand=!0,d.decodeChannels={Y:0}):de==gn?(d.format=gn,d.colorSpace=$t,d.outputChannels=2,d.shouldExpand=!0,d.decodeChannels={Y:0}):de==Gi?(d.format=Gi,d.colorSpace=$t,d.outputChannels=1,d.decodeChannels={Y:0}):C=!0;break;default:C=!0}if(C)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(d.type==1)switch(ne){case Qt:d.getter=ue;break;case It:d.getter=Te;break}else if(d.type==2)switch(ne){case Qt:d.getter=O;break;case It:d.getter=be}else throw new Error("EXRLoader.parse: unsupported pixelType "+d.type+" for "+f.compression+".");d.columns=d.width;const A=d.width*d.height*d.outputChannels;switch(ne){case Qt:d.byteArray=new Float32Array(A),R&&d.byteArray.fill(1,0,A);break;case It:d.byteArray=new Uint16Array(A),R&&d.byteArray.fill(15360,0,A);break;default:console.error("THREE.EXRLoader: unsupported type: ",ne);break}let Y=0;for(const q of f.channels)d.decodeChannels[q.name]!==void 0&&(d.channelByteOffsets[q.name]=Y),Y+=q.pixelType*2;if(d.totalBytes=Y,d.outLineWidth=d.width*d.outputChannels,f.lineOrder==="INCREASING_Y"?d.scanOrder=q=>q:d.scanOrder=q=>d.height-1-q,f.spec.singleTile){d.blockHeight=f.tiles.ySize,d.blockWidth=f.tiles.xSize;const q=zs(f.tiles,d.width,d.height),K=os(q,d.width,f.tiles.xSize,f.tiles.roundingMode),se=os(q,d.height,f.tiles.ySize,f.tiles.roundingMode);d.tileCount=K[0]*se[0];for(let J=0;J<q;J++)for(let re=0;re<se[J];re++)for(let he=0;he<K[J];he++)Oe(M,H);d.decode=Un.bind(d)}else{d.blockWidth=d.width;const q=Math.ceil(d.height/d.blockHeight);for(let K=0;K<q;K++)Oe(M,H);d.decode=ls.bind(d)}return d}const oi={value:0},cs=new DataView(e),Ti=new Uint8Array(e),En=ks(cs,e,oi),hn=Hs(En,cs,Ti,oi,this.type,this.outputFormat);if(hn.decode(),hn.shouldExpand){const f=hn.byteArray;if(this.outputFormat==Dt)for(let M=0;M<f.length;M+=4)f[M+2]=f[M+1]=f[M];else if(this.outputFormat==gn)for(let M=0;M<f.length;M+=2)f[M+1]=f[M]}return{header:En,width:hn.width,height:hn.height,data:hn.byteArray,format:hn.format,colorSpace:hn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,n,s){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=yt,a.magFilter=yt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,n,s)}}const _r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Z_=new Er(-1,1,1,-1,0,1);class K_ extends ln{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}}const j_=new K_;class Sc{constructor(e){this._mesh=new Tt(j_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $_ extends Ns{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vr.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ll extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class J_ extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Q_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:It}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $_(_r),this.copyPass.material.blending=An,this.clock=new vu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ll!==void 0&&(a instanceof Ll?n=!0:a instanceof J_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eg extends Ns{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new tt}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const tg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class es extends Ns{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:It}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new qt(r,a,{type:It});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new qt(r,a,{type:It});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=tg;this.highPassUniforms=vr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vr.clone(_r.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,premultipliedAlpha:!0,blending:ua,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new To,this._fsQuad=new Sc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}es.BlurDirectionX=new Fe(1,0);es.BlurDirectionY=new Fe(0,1);const ts=new Qh,ai=new rn(60,window.innerWidth/window.innerHeight,.1,1e3);ai.position.set(0,8,25);const Ln=new g_({antialias:!0});Ln.setSize(window.innerWidth,window.innerHeight);Ln.outputColorSpace=jt;Ln.toneMapping=uo;Ln.toneMappingExposure=1;Ln.physicallyCorrectLights=!0;document.body.appendChild(Ln.domElement);const Tr=new Q_(Ln),ng=new eg(ts,ai);Tr.addPass(ng);const ig=new es(new Fe(window.innerWidth,window.innerHeight),.3,.4,.85);Tr.addPass(ig);const Ar=1,sg=new bo;sg.set(Ar);window.addEventListener("resize",()=>{ai.aspect=window.innerWidth/window.innerHeight,ai.updateProjectionMatrix(),Ln.setSize(window.innerWidth,window.innerHeight),Tr.setSize(window.innerWidth,window.innerHeight)});const rg=new gu(16777215,.4);ts.add(rg);const Ec=new _u(16774374,1.5);Ec.position.set(20,15,10);ts.add(Ec);const Qe=new du,ag=new q_,oo=new io(Ln);oo.compileEquirectangularShader();ag.load("./assets/textures/space.exr",i=>{const e=oo.fromEquirectangular(i).texture;ts.environment=e,ts.background=e,i.dispose(),oo.dispose()});const og=new yi({map:Qe.load("./assets/textures/Zlato/Metal048A_2K-JPG_Color.jpg"),normalMap:Qe.load("./assets/textures/Zlato/Metal048A_2K-JPG_NormalGL.jpg"),roughnessMap:Qe.load("./assets/textures/Zlato/Metal048A_2K-JPG_Roughness.jpg"),metalnessMap:Qe.load("./assets/textures/Zlato/Metal048A_2K-JPG_Metalness.jpg"),displacementMap:Qe.load("./assets/textures/Zlato/Metal048A_2K-JPG_Displacement.jpg"),displacementScale:.03,metalness:2,roughness:1,envMapIntensity:1.5}),lg=new yi({map:Qe.load("./assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_basecolor.jpg"),normalMap:Qe.load("./assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_normal.jpg"),roughnessMap:Qe.load("./assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_roughness.jpg"),metalnessMap:Qe.load("./assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_metallic.jpg"),aoMap:Qe.load("./assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_ambientOcclusion.jpg"),displacementMap:Qe.load("./assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_height.png"),displacementScale:.08,metalness:.2,roughness:.75,envMapIntensity:1}),wr=new yi({map:Qe.load("./assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_basecolor.jpg"),normalMap:Qe.load("./assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_normal.jpg"),roughnessMap:Qe.load("./assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_roughness.jpg"),aoMap:Qe.load("./assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_ambientOcclusion.jpg"),displacementMap:Qe.load("./assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_height.png"),displacementScale:.03,metalness:.85,roughness:.35,envMapIntensity:1.6}),cg=new yi({map:Qe.load("./assets/textures/Metal_Plate/Metal_Plate_013_basecolor.jpg"),normalMap:Qe.load("./assets/textures/Metal_Plate/Metal_Plate_013_normal.jpg"),roughnessMap:Qe.load("./assets/textures/Metal_Plate/Metal_Plate_013_roughness.jpg"),metalnessMap:Qe.load("./assets/textures/Metal_Plate/Metal_Plate_013_metallic.jpg"),aoMap:Qe.load("./assets/textures/Metal_Plate/Metal_Plate_013_ambientOcclusion.jpg"),displacementMap:Qe.load("./assets/textures/Metal_Plate/Metal_Plate_013_height.png"),displacementScale:.125,metalness:1,roughness:.45,envMapIntensity:1.4}),hg=new yi({map:Qe.load("./assets/textures/Vatra/Lava004_2K-JPG_Color.jpg"),normalMap:Qe.load("./assets/textures/Vatra/Lava004_2K-JPG_NormalGL.jpg"),roughnessMap:Qe.load("./assets/textures/Vatra/Lava004_2K-JPG_Roughness.jpg"),displacementMap:Qe.load("./assets/textures/Vatra/Lava004_2K-JPG_Displacement.jpg"),emissiveMap:Qe.load("./assets/textures/Vatra/Lava004_2K-JPG_Emission.jpg"),displacementScale:0,emissive:new tt(16733440),emissiveIntensity:2.5,roughness:0,envMapIntensity:4}),ug=new yi({map:Qe.load("./assets/textures/solar-panel/Sci-Fi_Wall_008_basecolor.jpg"),normalMap:Qe.load("./assets/textures/solar-panel/Sci-Fi_Wall_008_normal.jpg"),roughnessMap:Qe.load("./assets/textures/solar-panel/Sci-Fi_Wall_008_roughness.jpg"),metalnessMap:Qe.load("./assets/textures/solar-panel/Sci-Fi_Wall_008_metallic.jpg"),aoMap:Qe.load("./assets/textures/solar-panel/Sci-Fi_Wall_008_ambientOcclusion.jpg"),displacementMap:Qe.load("./assets/textures/solar-panel/Sci-Fi_Wall_008_height.png"),displacementScale:.05,metalness:.5,roughness:.6,envMapIntensity:1.2}),fg=new yi({map:Qe.load("./assets/textures/Svetlo/Abstract_001_COLOR.jpg"),normalMap:Qe.load("./assets/textures/Svetlo/Abstract_001_NRM.jpg"),roughnessMap:Qe.load("./assets/textures/Svetlo/Abstract_001_SPEC.jpg"),metalnessMap:Qe.load("./assets/textures/Svetlo/Abstract_001_SPEC.jpg"),aoMap:Qe.load("./assets/textures/Svetlo/Abstract_001_OCC.jpg"),displacementMap:Qe.load("./assets/textures/Svetlo/Abstract_001_DISP.png"),displacementScale:.02,metalness:.5,roughness:.3,envMapIntensity:1.5,emissive:new tt(4491519),emissiveIntensity:2});function Dn(i){i.attributes.uv2||(i.attributes.uv2=i.attributes.uv)}const Sn=new Wi;ts.add(Sn);function bi(i,e,t,n,s,r,a,o,c){const l=new Tt(new Ei(n,n,s,32),cg);return l.position.set(i,e,t),l.rotation.x=r,l.rotation.y=a,l.rotation.z=o,Dn(l.geometry),Sn.add(l),l}bi(0,0,0,2,50,Math.PI/2,0,0);bi(0,0,25,3,2,Math.PI/2,0,0);bi(-4,4,7.5,1,10,0,0,Math.PI/4);bi(4,4,7.5,1,10,0,0,-Math.PI/4);bi(0,0,15,5,1,0,0,0);bi(0,0,0,5,1,0,0,0);bi(0,0,-15,5,1,0,0,0);function yc(i,e,t,n,s,r,a,o,c){const l=new Tt(new Ls(1,32,32),lg);return l.position.set(i,e,t),l.scale.set(n,s,r),l.rotation.set(a,o,c),Dn(l.geometry),Sn.add(l),l}yc(-7.5,7.5,7.5,2.8,2,8.5,0,0,Math.PI/4);yc(7.5,7.5,7.5,2.8,2,8.5,0,0,-Math.PI/4);function dg(i,e,t,n,s,r){const a=new Tt(new Ls(n,s,r),og.clone());return a.position.set(i,e,t),a.material.emissive=new tt(16755200),a.material.emissiveIntensity=1.5,a.layers.enable(Ar),Dn(a.geometry),Sn.add(a),a}dg(0,0,-24.5,1.9,16,16);function Ro(i,e,t,n,s,r,a){const o=new Tt(new Si(n,s,r),wr);return o.position.set(i,e,t),Dn(o.geometry),Sn.add(o),o}Ro(0,0,15,34,.3,.3);Ro(0,0,0,34,.3,.3);Ro(0,0,-15,34,.3,.3);const bc=[];function ss(i,e,t,n,s,r){const a=new Tt(new Si(n,s,r),ug);return a.position.set(i,e,t),Dn(a.geometry),Sn.add(a),bc.push(a),a}ss(-32,0,0,30,.1,6);ss(32,0,0,30,.1,6);ss(-32,0,15,30,.1,6);ss(32,0,15,30,.1,6);ss(-32,0,-15,30,.1,6);ss(32,0,-15,30,.1,6);const Ki=new Tt(new Ei(.3,1,2.3,16),wr);Ki.position.set(0,2,-2);Dn(Ki.geometry);Sn.add(Ki);const ji=new Tt(new Ei(.08,.08,1,12),wr);ji.position.set(Ki.position.x,Ki.position.y+1.5,Ki.position.z);Dn(ji.geometry);Sn.add(ji);const Cr=new Tt(new Ls(.35,16,16),fg);Cr.position.set(ji.position.x,ji.position.y+.5,ji.position.z);Cr.layers.enable(Ar);Dn(Cr.geometry);Sn.add(Cr);function Fs(i,e,t,n,s){const r=new Wi,a=new Tt(new Ei(n,n,s,24),wr);a.rotation.x=Math.PI/2,Dn(a.geometry);const o=new Tt(new wo(n,n),hg);return o.position.z=s,o.rotation.x=Math.PI/2,o.layers.enable(Ar),Dn(o.geometry),r.add(a),r.add(o),r.position.set(i,e,t),Sn.add(r),r}const Os=26;Fs(0,0,Os,.8,1);Fs(1.8,0,Os,.6,1);Fs(-1.8,0,Os,.6,1);Fs(0,1.6,Os,.5,1);Fs(0,-1.6,Os,.5,1);const pg=5e-4;function mg(){Sn.rotation.y+=pg}const _g=jl.degToRad(45),gg=.3;function xg(i){const e=Math.sin(i*gg)*_g;bc.forEach(t=>{t.rotation.x=e})}const on=new v_(ai,Ln.domElement);on.enableDamping=!0;on.dampingFactor=.05;on.minDistance=10;on.maxDistance=100;const Mn=[{position:new z(0,8,25),lookAt:new z(0,0,0),name:"Pregled"},{position:new z(0,0,-35),lookAt:new z(0,0,-24.5),name:"Kormilo"},{position:new z(40,5,0),lookAt:new z(0,0,0),name:"Solarni Paneli - Desno"},{position:new z(-40,5,0),lookAt:new z(0,0,0),name:"Solarni Paneli - Levo"},{position:new z(0,15,0),lookAt:new z(0,0,0),name:"Pogled Odozgo"},{position:new z(0,5,35),lookAt:new z(0,0,25),name:"Potisnici"},{position:new z(10,10,10),lookAt:new z(7.5,7.5,7.5),name:"Desno Krilo"},{position:new z(-10,10,10),lookAt:new z(-7.5,7.5,7.5),name:"Levo Krilo"}];let en=0,Rs=!1,xs=0;const vg=3;let Tc=new z,lo=new z,Ac=new z,co=new z;function Po(){Rs=!0,xs=0,Tc.copy(ai.position),lo.copy(Mn[en].position),Ac.copy(on.target),co.copy(Mn[en].lookAt),on.enabled=!1}function wc(){Rs=!1,on.enabled=!0}function Cc(){en=(en+1)%Mn.length,Po()}function Rc(){en=(en-1+Mn.length)%Mn.length,Po()}function Mg(i){if(Rs){if(xs+=i/vg,xs>=1)xs=1,ai.position.copy(lo),on.target.copy(co),Rs=!1,on.enabled=!0;else{const e=Sg(xs);ai.position.lerpVectors(Tc,lo,e),on.target.lerpVectors(Ac,co,e)}on.update()}}function Sg(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}const Gt=document.createElement("div");Gt.style.position="absolute";Gt.style.top="20px";Gt.style.left="20px";Gt.style.background="rgba(0, 0, 0, 0.7)";Gt.style.padding="15px";Gt.style.borderRadius="8px";Gt.style.color="white";Gt.style.fontFamily="Arial, sans-serif";Gt.style.zIndex="1000";document.body.appendChild(Gt);const Do=document.createElement("h3");Do.textContent="Virtuelna Tura";Do.style.margin="0 0 10px 0";Gt.appendChild(Do);const si=document.createElement("div");si.textContent=`Tačka: ${Mn[en].name}`;si.style.marginBottom="10px";Gt.appendChild(si);const rs=document.createElement("div");rs.style.display="flex";rs.style.gap="10px";rs.style.marginBottom="10px";Gt.appendChild(rs);const Xn=document.createElement("button");Xn.textContent="◄ Prethodna";Xn.style.padding="8px 12px";Xn.style.cursor="pointer";Xn.style.background="#4CAF50";Xn.style.border="none";Xn.style.borderRadius="4px";Xn.style.color="white";Xn.onclick=()=>{Rc(),si.textContent=`Tačka: ${Mn[en].name}`};rs.appendChild(Xn);const Yn=document.createElement("button");Yn.textContent="Sledeća ►";Yn.style.padding="8px 12px";Yn.style.cursor="pointer";Yn.style.background="#2196F3";Yn.style.border="none";Yn.style.borderRadius="4px";Yn.style.color="white";Yn.onclick=()=>{Cc(),si.textContent=`Tačka: ${Mn[en].name}`};rs.appendChild(Yn);const In=document.createElement("button");In.textContent="Slobodan Pregled";In.style.padding="8px 12px";In.style.cursor="pointer";In.style.background="#FF9800";In.style.border="none";In.style.borderRadius="4px";In.style.color="white";In.style.width="100%";In.onclick=()=>{wc()};Gt.appendChild(In);const Pc=document.createElement("div");Pc.innerHTML=`
  <div style="margin-top: 10px; font-size: 12px; line-height: 1.5;">
    <strong>Kontrole:</strong><br>
    • Levi klik + povuci: Rotacija<br>
    • Desni klik + povuci: Pomeranje<br>
    • Scroll: Zoom<br>
    • Brojevi 1-8: Brzi pristup tačkama
  </div>
`;Gt.appendChild(Pc);window.addEventListener("keydown",i=>{const e=parseInt(i.key);e>=1&&e<=8?(en=e-1,Po(),si.textContent=`Tačka: ${Mn[en].name}`):i.key==="ArrowRight"?(Cc(),si.textContent=`Tačka: ${Mn[en].name}`):i.key==="ArrowLeft"?(Rc(),si.textContent=`Tačka: ${Mn[en].name}`):i.key===" "&&wc()});let Il=0;function Dc(i=0){requestAnimationFrame(Dc);const e=(i-Il)/1e3;Il=i,mg(),xg(i*.001),Mg(e),Rs||on.update(),Tr.render()}Dc();
