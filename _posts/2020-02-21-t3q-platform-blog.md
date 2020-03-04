---
layout: post
title: "T3Q Platform Blog 설치"
subtitle: "Docker + Jekyll + facebook comment"
date: 2020-02-20 11:20:00 +0900
background: '/img/posts/02.jpg'
categories: [blog]
tags: [blog, jekyll]
author: jypark
---

T3Q Platform Blog 를 설치하기 위한 방법을 공유합니다.  다음과 같은 절차로 진행하였고 다음 Task 도 같이 포함하였습니다.

# 1. Docker 환경 구성
도커환경을 통해 서버환경을 구성하는 시간을 대폭 줄일 수 있었다. 사내에 블로그를 운영하기 위해 선택한 Jekyll(지킬) 의 경우 Ruby 환경에서 빌드가 가능한다. 추가로 환경을 구성하지 않고 관련 이미지를 다운로드 하여 Jekyll 환경을 구성하였고, 실제 서비스 하기 위한 웹서버 역시 nginx 이미지를 가지고 쉽게 구성할 수 있었다. 물론 처음이다 보니 도커 환경에 대한 약간(?)의 시행착오도 있긴 하였다.
- [Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)
- [Get started with Docker for Windows](https://docs.docker.com/docker-for-windows/#getting-started-with-windows-containers)

# 2. Jekyll 설정
[Jekyll](https://jekyllrb-ko.github.io/) 의 경우 [GitHub Pages](https://pages.github.com/)와 연동하여 블로그를 서비스 할 수 있다. 개발자들 사이에서는 널리 알려진 방법인데 우리는 사내환경이기에 GitHub Page 를 이용하지 않고 사내 GitLab(https://lab.t3q.co.kr:9999/) + Jekyll + Nginx 를 이용하여 서비스 하기로 정했다. 참고로 블로그에 포스팅 하여렴 Git 사용법과 보통 위키에서 많이 사용하는 [Markdown](http://kirkstrobeck.github.io/whatismarkdown.com/) 문법을 알고 있으면 충분히 가능하다   

## 2-1. Docker Image 다운로드
- https://hub.docker.com/r/jekyll/jekyll/

## 2-2. Container 실행
```
docker container run -d --name blog \
  --volume="/home/tnt/deploy_kubernetes/blog:/srv/jekyll" \
  -it jekyll/jekyll jekyll build --watch -d /srv/jekyll/deploy
```

# 3. Jekyll theme 선택
[RIDI Tech blog](https://www.ridicorp.com/blog/)와 비슷한 [Clean Theme](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll)를 찾아 적용하였다. RIDI 블로그와 똑같지 않을 것을 보니 부족한 부분은 plugin 을 통해 추가 설치가 필요하다.

# 4. Jekyll plugin 추가
1. Jekyll-author : 포스팅 작성자를 표시하는 부분이 필요했다. 아무래도 팀 블로그이다 보니 작성한 팀원을 포스팅에 표시해주는 기능을 달아 블로그의 품격(?)을 높여주고 싶었다. 
2. 기타 등등 : 필요에 따라 추가할 플러그인은 TODO 로 남겨둔다.  
- 참고 : [Jekyll Multiple Authors for Guest Posting.](https://blog.webjeda.com/author-box-jekyll/)

# 5. 서버환경구성 빌드 및 배포

## 5-1. 포스팅 절차
1. 포스팅 작성 후 Blog 저장소 Commit/push
2. Jenkins build (Jekyll 빌드 후 nginx 서버 deploy 디렉토리에 copy)
  
## 5-2. 기타 정보
- 배포 서버 : `192.168.0.97`
- 블로그 배포 경로 : `/home/tnt/deploy_kubernetes/blog`
- 블로그 실행 `/home/tnt/deploy_kubernetes/blog.sh` 
```
docker container run -d --name blog \
  --volume="/home/tnt/deploy_kubernetes/blog:/srv/jekyll" \
  -it jekyll/jekyll jekyll serve --watch -d /srv/jekyll/deploy
```
- 로그 : `[tnt] docker logs -f blog`
- 접속 정보 : http://192.168.0.97:4000


# 6. TODO
- 외부 인증 ( nginx auth 또는 jekyll plugin )
- blog search 기능 ( Jekyll plugin )
- blog tag, category 기능 ( Jekyll plugin )