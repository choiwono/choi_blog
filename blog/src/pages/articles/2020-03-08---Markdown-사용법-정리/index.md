---
title: 2020-03-08---Markdown-사용법-정리
date: "2020-03-08T12:54:00.000Z"
layout: post
draft: false
path: "/posts/markdown-syntax/"
category: "Markdown"
tags:
  - "markdown"

description: "마크다운 사용법 정리"
---

# 마크다운 문법

> 틀린 내용이나 적용이 되지 않는 점이 있으면 댓글로 남겨주세요.

# 1. Headings 헤더

**💚 문법**
**⭕ 사용가능**

| Markdown 문법 | html 태그 |
| :- | - |
| # 헤더1 | `<h1>헤더1</h1>` |
| ## 헤더2 | `<h2>헤더2</h2>` |
| ### 헤더3 | `<h3>헤더3</h3>` |
| #### 헤더4 | `<h4>헤더3</h4>` |
| ##### 헤더5 | `<h5>헤더3</h5>` |
| ###### 헤더6 | `<h6>헤더3</h6>` |

**💘 결과**

---
# 헤더1
## 헤더2
### 헤더3
#### 헤더4
##### 헤더5
###### 헤더6


## 📝 그 외의 Headings 헤더

**💚 문법**
**⭕ 사용가능**

```
제목입니다
==

부제목입니다.
--
```

**💘 결과**

제목입니다
==

부제목입니다.
--


# 2-1. Styling text 강조구문

| Markdown 문법 | 결과 |
| :- | - |
| `*이탤릭체*` | *이탤릭체* | 
| `_이탤릭체_` | _이탤릭체_ | 
| `**볼드체**` | **볼드체** | 
| `__볼드체__` | __볼드체__ | 
| `<u>밑줄</u>` | <u>밑줄</u> | 
| `~취소선~` | ~취소선~ | 
| `~~취소선~~` | ~~취소선~~ |  
| `<sup>아랫첨자</sup> ` | 기본글씨<sup>아랫첨자</sup> | 
| `<small>작은글씨</small>` | 기본글씨 <small>작은글씨</small> |


> 기본적인 마크다운 문법을 기반으로 변형된 마크다운 문법이 많습니다
  현재 블로그 마크다운 버전 기준으로 적었습니다.
 
# 2-2. 강제 개행과 그 이외

**💚 문법**
**⭕ 사용가능**

```
글 내부에 <br> 삽입
```

> 현재 블로그 마크다운 버전 기준으로는 `<br>` 외에는 작동하지 않습니다.
> 추가적인 방법은 글 내부에 헤더라인(`#헤더`)을 추가하는 방법입니다

---

# 3. 인라인 코드, 코드 블럭

**💚 문법**
**⭕ 사용가능**

```
`내용` <code>내용</code>
<pre>
 코드내용
</pre>
```

<pre>
```JavaScript
function sum(a,b) {
	return a+b;
}
```
</pre>

**💘 결과**
`내용` <code>내용</code>

<pre>
 코드내용
</pre>

```JavaScript
function sum(a,b) {
	return a+b;
}
```

> 지원하는 하이라이팅 언어
* Bash (bash)
* C# (cs)
* C++ (cpp)
* CSS (css)
* Diff (diff)
* HTML, XML (html)
* HTTP (http)
* Ini (ini)
* JSON (json)
* Java (java)
* JavaScript (javascript)
* PHP (php)
* Perl (perl)
* Python (python)
* Ruby (ruby)
* SQL (sql)

# 4. 인용구

**💚 문법**
**⭕ 사용가능**

| Markdown 문법 |
| :- |
| `> # 제목` |
| `<Blockquote></Blockquote>` |

* 인용구는 여러번 사용이 가능합니다. 예를 들면
* 내부에서 강조구문, 헤더라인이 같이 사용가능합니다.

```
> # 제목
> **강조구문**

> 첫번째 인용구
>> 두번째 인용구
>>> 세번째 인용구

```

**💘 결과**

> # 제목
> **인용구 강조**

> 인용구는 이중, 삼중으로 사용이 가능합니다.
>> 두번째 인용구
>>> 세번째 인용구

> 인용구는 한번만 선언하면
각 라인마다 선언할 필요가 없다

# 5. 링크

**💚 문법**
**⭕ 사용가능**

| Markdown 문법 | 결과 |
| :- | - |
| `[choiBlog]](https://treasureb.netlify.com/)` | [T3Q 블로그](https://treasureb.netlify.com/) |
| `<a href="https://treasureb.netlify.com/">블로그</a>` | <a href="https://treasureb.netlify.com/">T3Q 블로그</a> |
| `[Youtube](https://www.youtube.com/watch?v=WQ52gWMxCF8 "하이퍼링크 설명 작성이 가능합니다")` | [Youtube](https://www.youtube.com/watch?v=WQ52gWMxCF8 "아이패드로 코딩하는 방법!") |

```
텍스트 작성 중간에 [Link]를 사용할 수 있습니다.
```

# 6. 리스트

**💚 문법**
**⭕ 사용가능**

```
- 리스트 1
  - 리스트 1 하위
* 리스트 2
	- 리스트 2 하위
+ 리스트 3
1.리스트 4
```

**💘 결과**

- 리스트1
  - 리스트 1 하위
* 리스트2
	- 리스트 2 하위
+ 리스트3
1. 리스트
2. 리스트

> 하위 리스트를 작성하고 싶은 경우 리스트 아래에 탭 혹은 스페이스 두번 공백을 통해서 
  기존 리스트의 하위 리스트를 만들 수 있습니다.

# 7. 테이블

**💚 문법**
**⭕ 사용가능**

```
| 제목1 | 제목2 | 제목3 | 제목4 |
| :- | - | :-: | -: |
| 내용1입니다 | 내용2입니다 | 내용3입니다 | 내용4입니다 |
| 내용1 | 내용2 | 내용3 | 내용4 |

| <center>제목1</center> | 제목2 | 제목3 | <center>제목1</center> |
| :- | - | :-: | -: |
| 내용1입니다 | 내용2입니다 | 내용3입니다 | 내용4입니다 |
| 내용1 | 내용2 | 내용3 | 내용4 |

:--- > 왼쪽 정렬
 ---  > 정렬 x
:--: > 가운데 정렬
---: > 오른쪽 정렬

---의 개수는 상관이 없습니다. 

```

**💘 결과**

| 제목1 | 제목2 | 제목3 | 제목4 |
| :- | - | :-: | -: |
| 내용1입니다 | 내용2입니다 | 내용3입니다 | 내용4입니다 |
| 내용1 | 내용2 | 내용3 | 내용4 |

| <center>제목1</center> | 제목2 | 제목3 | <center>제목1</center> |
| :- | - | :-: | -: |
| 내용1입니다 | 내용2입니다 | 내용3입니다 | 내용4입니다 |
| 내용1 | 내용2 | 내용3 | 내용4 |

* 내부에서 html 코드를 이용해서 정렬이 가능합니다. 헤더 밑에 `:-`코드를 통해서 정렬 위치를 결정할 수 있습니다.

# 8. 수평선

**💚 문법**
**⭕ 사용가능**

```

---
***
* * *
- - -
___
<hr>

각 문법별로 굵기의 차이만 있고, 적용은 동일합니다.

```

**💘 결과**

---
***
* * *
- - -
___
<hr>

# 9. 백슬래쉬

**💚 문법**
**⭕ 사용가능**

| Markdown 문법 | 결과 |
| - | - |
| `\\` | \\ |
| `\*` | \* |
| `\_` | \_ |
| `\{` | \{ |
| `\}` | \} |
| `\[` | \[ |
| `\]` | \] |
| `\(` | \( |
| `\)` | \) |
| `\#` | \# |
| `\+` | \+ |
| `\-` | \- |
| `\.` | \. |
| `\!` | \! |

> 백슬래쉬를 통해서 마크다운 문법과 겹쳐서 사용할 수 없었던 코드 수정이 가능합니다.

# 10. Emoji 이모지

**💚 문법**
**⭕ 사용가능**

**첫번째 방법 : 단축키**

**Windows 10 단축키**

* `윈도우키` + `.`
* `윈도우키` + `;`

**Mac 단축키**

* `Ctrl` + `Command` + `space bar`

**Copy & Paste 복사 붙여넣기**
> copy & paste로 바로 에디터에 붙여넣으면 됩니다.

* [Emojipedia](https://emojipedia.org/) 
* [GetEmoji](https://getemoji.com/)

**결과**

😊😂🤣💔💔😒👌😘💕😁😎😎😎

> 적용이 안되는 이모티콘이 있습니다. 

# 12. Image 삽입

**💚 문법**

**⭕ 사용가능**

```
![제목](주소)
![이미지주소](https://example.com)
```

**💘 결과**

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFhUYGBUXFxUVFRUWGBYWGBgXFRcYHSggGBolGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFi0dHR0tLS0rLS0rKy0tLSstLS0tLS0tLS0tKystLS0tLS0tLSstKy0tLS0rNystLS0rLSstK//AABEIAOgA2QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA/EAABAwEFBQYEAwYGAwEAAAABAAIRAwQFITFBBhJRYXEigZGhscETMtHwB0LhFCNSYsLxQ1NygpKyM2OiJP/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIBEBAQEBAAIDAQEBAQAAAAAAAAECESExAxJBURMiBP/aAAwDAQACEQMRAD8Aq0IhELRmEQlQgBCEqARCJVBfN9RLKemBdz4BKnJ1aWy3MpjE48FSWm9XEk4Bo03se9Zm0VnOklxx1UffOpKF/Vdvvwg4OPhh4Lo7TviA3v5qgJQEunxfM2pqj8re+VY2LatpwqMLeYxCyO6naXE5YT9UdH1elWS1sqCWOBCkLHXZW+GQWnAwtZZ6we0OCcqNZ4dSQlQhJIQlSSgEQlSIASFdJEwRCVEJ9BEIhEIBUIQkYSpEqCCCiEOKFKu+reGDdmCR5LM03Ne7d0HmmrztJq1nmeyDA6DD9e9XOyt17w+I4a4dAs9XjbGOoo2beW/EcYGgVa66nF0ALaXzeEFtJuvn08lNu2xNOmMGO/D6rP73jX6R5la7E6me0IlMQvR9trl7MgfKAAsM6xkOjj6/3V512I1j61CCfot+ncfsp82ExlqnKFAiJGRhUk5ZHGN3UZc+BV1dtuLCJmNen6T4Ktq0SDPDzGX0UuzMw++76JdHGrBSqtuatgaZzbl/p08MlZK2FnAhCEERCVBQCISwkTgIhKkQAhBSoAhEJUIPpISoQgBRLzq7tN7uDT6KWqjaipFB3OB4oEYmzSXbo1w7l6TdnwqdEQ9ruzi0EcNQsPsvZ6bqpNQYDnGa3T9k6VRpdZ39rOJnLriufdneV2/HLzqlu+i6tXLzpkdBj+votjs5Zt55dENBAb4AT6+a52cu4Bnwo7Wp1VrbN6lDaQ075WV01kPbQXR8Wg8AYxh5+68fNbtFjxDmnvwXq1nvK15fD3h3LH7d7MVjNqZSIH5wMxzwWmGW4y9W3gSI5jrn4Yp6z1G1BhhOnCI9lQuk4eC6sdUtcDpI+h8lpGVjRCmd0HrPpHn5IpMwBnKR1Cbs1fNpyJ7sdf8A6co9qtW6euB6j78ggLVtTccHjSJ5g4H75K+aZWWslcPG7y8j9hXtz1t6mJzGCrLP5Z+pqEQlVMiISpEAJISoTBIQlQgEhEJUIAQhCDCEJUChZzbV/wC6aOLvYrRrKbcPwpt5uPoPdKqx7Qtn7qNRocd7cLsY4D2la+jcldtb41lqMp9luGUbpBMNGBndg8nFX2x1gayhTA0aFe2ycKbPmeY6DU9y5ta7XZnMk8utmrFvValciGmABzzd5mO5cbVPNM7wGBE4cZiFobNTDGtYMgIXF4WRr2w4fVRZ4VNc115zV2orWc0zUpt3KkxBJiAMTDTxAWxuDaKlaqcsBaYBLHYEA5SOCKVyswkNcAZAc0GD6K1s9z0fm3AHDUCD5aJyfwXX98vNdsdgmvca1l7LiZdT/KZ1bwK81vCyOpvLHCCMx0z+q+kbRTAK8r/FW7g0trtABydzx/Up51e8TrMs6wtmq5eB7svdd27tAHiMevH0USk4TyOITjnYEcFqyFhtBbqtLs/au25uhxH34LJZFWV2WiHtM5EffknPZa8xu0qRpSrVzBCEIASJUIBEIQmAhCEgEJUIOhCEIAWS24/w/wDd7LWrHbbVQXNb/CMeU5DyKVVn29F2TtQNJvRR7ftMKFraXg7u7E6do+0DxVJsPb/3I5D0wV7SttmLgakEzjImFyWeXfn/AKk41VO/iS0/Cc+k6B8VhDt3DN7RiG6T/dW37TIGMjRRbkr0XAtZu5nAR6KfaqYjDRKTwWvF5wtAAlSqlQAKtpvhJXrYJ94XOmbXXXn34hzUYBoJ8ePmFqre84qktdFrmkv4EAcdT7KZfPWn17Hjm7BjgnC72U2/KDg+dxzRJjeG6TOsKuPoumXrls4VxTtnqYhMOStcmT0e7a2/Sa7kPHIqSqXZWtvUY/hJHoVdK56YanKEIQmkIQhACRKhAIhKkQCoQhBhCEIBHugE8Fg9onzunV5c8nkcGgcoC2N6VS1hjM/TDz3fFYnaE9uOAA8AD7qavMW2wtrAJYdPQ4+sq5slip/Eqb4di47snsxPJYS6LV8OqHTgcD7FezbL1GvaJAPULD5Jzy6//PvlN3fcuRpVXsOgGI64rU3ZTtTcK72vbGBAIdPPGFYWClTAkADonbRVCiemvyfJ9vHEchR7S4AJa1oAzKo7zvlo7IMu0AxKi1MiPelrAxlU7r+dQ/8ALY3PaQYcHCceIOXirOwXRUrPD6ohsyG/VWF82YFjgQj0vv48j2gv9teodyj8PH8x3j06LPs5qwvOjFc83eX2F3YLKHMnmff9F1Tknhy223ygPpkJuFZsoyYOohRLTQ3XR3p9TYv9i6/aeziAR3YH1C1aw2zBi0DmCtyFWWO/YQhCpAQhCAEIQgAohCEAIQhBhCEhQasvkzA4n3afZYq+qk1CeZ8Jw8lsb192+qw1tdLip/V5RStPs/te+zgAgujUZ94WZKRKyU8259PWbD+JrCQ0sdJUuvtrUfhTp48149SfukHgQV6Vs5Ta4B3GCsd4kdHx/Jb7W1P9rr/M7dB0C0ly3GyniRJ4lO3eG7oVjReJWNa9TaVMBVF805aQNVcA4KtvEGDAk8EVM9vGtrLGGVd+IgeKq7BXhoHMlbHbG7nOY52ZzJ0EZAdFh7I3TWCfvuW2L3KN55pJs7t7qCCn69AOg93ccQVEsoLDiI9FMc+OitAuqhu12HkfT9VsGnTgs1YXt3mmVo2GVeax+SO0FAKVWyIlKJQgEQhCAEIQgBCEIMLkrpcuQFRfLf3TjwI9Vha4xPVb+9mzRqDk7yx9lha7Yb3qb7aZ9IhCQhONCCg+Glt9hbbI+GTiMljCzFXuxtgtNSvNnpl4bG+Za1rQct5ziB3Z5panYrF5Xq1ktW7gVaWS0yVUUrgtFQhrSzeiY3xp0lXl27MWlvzGnPJxP9K5r8ev46f9M/1b0H4KPaCp1C6akQXNHifZOC5cZdUJ5Bse6X+e7+I/1zP1l7fd4qNLYCwV7bMGk4vAhsThjB5cl7WLspjQnqfouhYaQ/w2nr2vVa4+LURr5s2ceE3ddLqoOW7xMjwwKj7SbLV7IwVCN+kTG+3ENJyDtW9+BXvQuuzsHYoUm9GNHoFn9vL0pWWw13OYwmow02NIEOqPBAw1AxJ5ArWYRfl6+fmWlzTgtNc16zgf17llokSnLHX3HA6JejvmPRGuBxXSgXdW3mgg+6nArRhSoRKEFwIQhACEJEEVCEIUEhSpCgK68nRSf0d5iPdY200uzHU+GC0m0dtDWhgzd6T/AGVE9uAnVpPsPISs77a5nhV0Grmoz1U+zUu0eQPr+qiWgQ774p9O+ndlpbzzwaD5YL6E/D65KNCxUmx23tFR5nN7wCcRwEDuXhuzdl3nCfzuY2OTnR6E+S+gH3k1gO8BHd9lVlGkq6t39odEyKevNw+iti9ZjZm1ipaKpH+WP+wWjlVUHd5LvpuUSkDm+gFNLlz4CAS2VIEDMkLyH8a7JWeKNcSaFPeYYya9xEPI5xE9OK9MtL5dEy45D36JyvYWPpGi9ocxzS1zTk4HOU+eBHzHQy80j4V5tVs+6w2o0sTTd2qTj+Zh0PMHA9x1VLaGQeRy6LK+20vYsrkvX4Zh07vHgtTRvOm7JwnhiD4Lz9uK0Fztaey5s8CDB6I7wrnvlqqbwdZ6JxVrbDAmm8zwdj3Ton7LaCey4Q4eavrKz+JaEBImQQhCCKhIlQoKFeNtFJhcdPXgFLKyV9V3VahaPkYd0cC7WeiVpydQbPTdXql7jr4Dku6ubvAcowVrRs4o0+cFx44yGjrms/WqaDMme7RRWkqZZ2gBzunrPoAqq0Yvw5KU6rDY1Pv+ijscA4u4Iiqtqdo+DuAZtc15/wBUgx4ABb+213EA70ggEY6HIryZ9YkydVvbotJdZ6ROYaB/xw9lWfCb5bn8OXzWq8qY/wCy3JcBiTH3pxK852Btop1a04ksaGtGbjveQ4lbuyGSXPcC/lk0cGj31VM9e0wOJ0jrn4JY6+i53wupQRHMHPxP1UCpZg89ouA4BzhPWCplepAjimgmHNCzsZ8jQ3pmep1ThSShAUe2OzLLdQ+GYbUb2qT/AOF40P8AK7I/oF4HbrM5hdTe0tfTcWkHMEHEeq+nGYgdV5j+LuzmVuptz3W1gOIwZU/pP+1Tqfq8X8eRsOKuLPIAIwVVu4q2pOAaOizrWNPYK2+0HxHNO2mnMHUEYqquev4K5haS9jDU5XTDglSAJU0hCSUSgioRKAhTiqYBPAFZmwUp3S7UucfU+ZWmrDskcj6KipU4DDyeO+RCVPKJe9ozJ45cXaDuWdJxkqzvup+83NGjHqqt+GKlpA6pJTb3JWalcFBklbLZuTQDf5zHQmfUlY5oXo+x13OdUpsGEbpnoZPofEKom3w9AuO5xZqW8Y+I4YnOOQ6K3sFDdbvH5nYnjjkDPAJtwlwbpAJHIKW8qqzcgnQn2UploEScIUamF04SeQQHQcSd49w4D6rsFcpQkHcpQuJXbEwVpgd49V3a6DXh1N7Q5lRpBaciCIIKZqHslSa+LQeGKA+dNrdn3WO0voEEt+am4/mpkmMeIxB6TqFAoP0K9226uFtrszob+9pgupkZ7wHy9HZHuOi8Frs1yjy5Hgs9Rrm9SbutRZVg5exOC11J3gsBXqZHULYXPaN+m08k8lv+rREpAhUyCEkolBFRKRIhRSVV2ilDY4F0eBPqFaKPaG/fcfqlRGFtLt57jxcSotXE8tFJrth7xzI801UbipbG2NlNuCnfBhk8VCdkgJVzWX4lZjecnoPsL2zZCxBoL40jyxXmX4f2TeqPfwge59l6/YmbtNrRm73xWmfTLVWdkGbjr6DJPuSMbAACCgnVIQJXdMYdVyRgBxTgQCwhKkKQclLTfiuSdUWaMSmDtQYHopFEywdE0MUU3gMHQIALvy6rxv8AEvZ/9mtBrUx+7rkuLYyqZvjr80czwXsVI5niqfbO6P2my1KYA3436f8ArbiB34t6OSs6ebyvnmtS1GR8lbbNWvdJpnXEciqwu5YHAg5tOoPNFCpuuDh9j6rOVrZ2N6ClUWx2gOaCNVI3loxsdIXIKVNPOhCSUSkoqbcu5XKAx192fcqg6Ox7xgfZQaVPedH3xWj2ks805/hM/VUNkfAc7WY9VFay+Bb6mIaMgq2oMU/VfiU3VbEE64oD0T8NLJ/+dz/4qm74QD6L0iydp/JuHfqsPsGwsstNpwgOf3ux/qjuW8utkNBIzx5rX8ZVPSkLlzl0wypDucV21NtTrU6HS4cupXJSDh66s65enrO3BMHAAojMTHBSKr4CYoGXE6YICQ0YIdp0XZXJz7kQPANvbs/Z7fWaPlefiAfyvxkdHbw7lnHT3L1n8Z7p3qNO1NHaou3HH/1vOB7nx/yK8rpQ4Rk7hx6LPU41xew/d1eq0wx3ccR3LQ2H4rv/ACOED8o91m7F80aj1WsskQDxCMlvwlhEpESrYiUSuUIU7SLlKmDVroh7S06grHmiWPLTxW1VTeNjDpdqPOT/AGUWKzWP3O13rq3jDu/RSrZZi1wfGE4ri0t3y2PzGPE/qkt6vdjpYMAJDcsAJx9Fs7JkMljLDgWjgfQALZWPEBaMkiJTjMlw54GuPmnDkiAMT4TNMLqo/RAdEoBTW8kB0RwO3KU1sABRhoOa6tFQg4a+RTBawkxoloDPqmwnKOSQPErjUd664Jt2Y70QIl73e20UalB47NRjmnvGfUGD3L5yt1iNN72HB7HOaR/M0wvpsNXi34rXQKdr+LgG1m7x07TcHf0nvU6VhjrNLnNnMmFqLGHBowVHdVi3iHD5R65LTtU5h7roIlIkWjIqEiEjLKJQhMxKbqNlCEUkG0UWkdoae6orFZx+00mD/Mbh0Mn0SIUX20z6epXLQ33Sch14z9FqbK3dESYQhaz0inrO4lxIGGSkPckQgHGGMU1KEJAoOKScUIQD7TiF29CEA2U8MghCVDonJct+buQhIHlldvrtFWz75AJpkHj2TgfY9yEJwnndKi1ohogDROIQgghCEw//2Q==)


# 13. 목차
**💚 문법**
**❌ 사용불가**
> 자동으로 목차를 지원해주는 경우가 있습니다. 저희는 지원되지 않고, 오른쪽에 목차가 나타납니다.

```
[TOC]
[[_TOC_]]
[toc]
```