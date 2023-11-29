type tContent = {
  title: string;
  description: string;
  do: string[];
  tech: string[];
  techHighlight: string[];
  link: string | null;
};

type tExperience = {
  company: string;
  position: string;
  period: string;
  content: tContent[];
};

type tOthertExperience = {
  name: string;
  content: { title: string; url: string | null }[];
};

type tResume = {
  name: string;
  job: string;
  contact: string;
  about: string[];
  experience: tExperience[];
  otherExperience: tOthertExperience[];
};

const resume: tResume = {
  name: '김준호',
  job: '전산실 operator',
  contact: 'Email: OracleMemory2@gmail.com',
  about: [
    '현재 전산실 근무를 하고있지만 개발자가 목표이기에 공부하고있습니다.',
    '근무 중 또는 여유 시간 틈틈히 개발자가 되기위해 노력하고있습니다.',
    '',
    '현재는 저의 호기심과 제 자신을 위한 프로젝트를 해보고있지만 회사가 필요로하는 것을 개발을 하기 위해 기술 스택을 늘려가고있습니다.',
    '',
    '주로 혼자 해왔지만',
    '팀으로있었을때 프로젝트에 대한 얘기를 하는것이 매우 즐겁습니다. 특히 오류에 대한 대처를 했을때 가장 즐거웠습니다.',
  ],
  experience: [
    {
      company: '개인',
      position: 'Frontend Engineer',
      period: '23.07 ~',
      content: [
        {
          title: 'Man VS 탈모',
          description: '머신러닝을 통한 8개의 질의응답으로 자신의 탈모 위험도를 알아보자',
          do: [
            'Fastapi와 React를 통한 개발',
            '머신러닝을 이용해 lasso, svm, 다항회귀 등등 여러 모델들을 사용해 가장 높은 정확도의 모델로 사용자에게 예측된 결과 제공',
            '많은 사용자 확보를 위해 다양한 플랫폼에 공유할 수 있는 기능 개발',
          ],
          techHighlight: [
            'React',
            'FastAPI',
            'Sklearn',
          ],
          tech: [
            'Git',
            'Sklearn',
          ],
          link: ''
        }
      ]
    },
  ],
  otherExperience: [
    {
      name: '발표',
      content: [
        {
          title: 'System.out.Girls - 실수해도 괜찮아!',
          url: null
        },
        {
          title: 'FECONF2022 - ReScript 같이 해요',
          url: 'https://www.youtube.com/watch?v=208ZBisLuXw'
        },
        {
          title:
            '소주콘 Shot 1 : 진로 빨간 뚜껑 - 좋은 질문은 좋은 대답을 만든다. with relay',
          url: null
        }
      ]
    },
    {
      name: '번역',
      content: [
        {
          title: 'ProjectDiscovery nuclei README.md',
          url: 'https://github.com/projectdiscovery/nuclei/blob/master/README_KR.md'
        }
      ]
    },
    {
      name: '2021 오픈소스 컨트리뷰션',
      content: [
        {
          title: 'React Analytics Provider',
          url: 'https://github.com/EveryAnalytics'
        },
        {
          title: 'https://github.com/react-ga/react-ga 의 util 분석',
          url: 'https://miryang.notion.site/react-ga-util-0399d64a0c1747f1b4c2b292d8a0d994'
        },
        {
          title: 'why-ga 블로그 글 문서 작성',
          url: 'https://github.com/EveryAnalytics/web-analytics-handbook/pull/64'
        },
        {
          title:
            '기존에 package.json 에 명시된 jest config 를 jest.config.js 로 분리',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/92'
        },
        {
          title: 'production 일 때 console.log 등이 안 보이도록 조치',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/93'
        },
        {
          title: '중복된 타입 적용',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/152'
        },
        {
          title: 'set test 추가',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/173'
        }
      ]
    },
    {
      name: 'XXIT 커뮤니티',
      content: [
        {
          title: 'techtalk 행사 공식 페이지 개발',
          url: 'https://github.com/XXIT-Official/2019-xxit-tech-talk'
        },
        {
          title: 'TomeFromme 기획 및 개발',
          url: 'https://github.com/XXIT-Official/TomeFromme'
        }
      ]
    },
    {
      name: '자격증',
      content: [
        {
          title: 'ISO 27001 Lead Auditor Course',
          url: null
        },
        {
          title: '리눅스마스터 2급',
          url: null
        }
      ]
    }
  ]
};

export default resume;