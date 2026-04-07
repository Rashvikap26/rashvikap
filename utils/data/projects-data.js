import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Payment Eligibility Platform',
    description:
      'Built a scalable payment eligibility platform for banking applications to validate transactions, perform entitlement and routing checks, process inbound payment files, and support downstream banking integrations. Developed secure microservices and real-time UI flows to improve eligibility decisioning, transaction visibility, and operational support.',
    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'Spring Cloud Gateway',
      'Spring Batch',
      'Spring WebFlux',
      'REST APIs',
      'gRPC',
      'GraphQL',
      'FrontEnd Development',
      'AI',
      'Apache Kafka',
      'Oracle',
      'MongoDB',
      'Redis',
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins'
    ],
    image: ayla,
  },
  {
    id: 2,
    name: 'Healthcare Claims Adjudication System',
    description:
      'Developed a secure healthcare claims adjudication and member servicing platform to support claims intake, validation, benefits processing, ETL workflows, and real-time member access. Built scalable backend services, React-based member portals, and integrated provider and third-party systems to improve claims accuracy, performance, and operational efficiency.',
    techStack: [
      'Java 11',
      'J2EE',
      'Spring Boot',
      'Spring Security',
      'Spring Batch',
      'Spring MVC',
      'JAX-RS',
      'FrontEnd Development',
      'Material UI',
      'Apache Kafka',
      'MongoDB',
      'MSSQL',
      'DynamoDB',
      'AWS Lambda',
      'EKS',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'Redis'
    ],
    image: crefin,
  },
  {
    id: 3,
    name: 'Telecom Usage & Billing Platform',
    description:
      'Worked on a telecom usage and billing platform supporting usage ingestion, rating, invoice generation, billing reconciliation, and customer account workflows. Helped modernize legacy billing functions into Spring Boot services and built APIs and React dashboards for customer care, billing operations, and month-end processing support.',
    techStack: [
      'Java 8',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'REST APIs',
      'FrontEnd Development',
      'Apache Kafka',
      'Hibernate',
      'JPA',
      'MongoDB',
      'PostgreSQL',
      'AWS CloudWatch',
      'Jenkins',
      'AWS CodePipeline',
      'Elastic Beanstalk',
      'Splunk',
      'Datadog',
      'Log4j'
    ],
    image: realEstate,
  },
  {
    id: 4,
    name: 'Enterprise Transaction Processing System',
    description:
      'Contributed to enterprise transaction processing applications using Java, J2EE, Spring, Hibernate, SOAP services, and Oracle in a high-volume enterprise environment. Worked on backend service development, messaging integration, database tuning, deployment support, and SDLC process improvements across transaction processing workflows.',
    techStack: [
      'Java',
      'J2EE',
      'Spring IOC',
      'Hibernate',
      'JDBC',
      'SOAP Web Services',
      'Apache Axis',
      'JMS',
      'Oracle',
      'IBM WebSphere',
      'Jenkins',
      'JIRA',
      'Confluence',
      'Bamboo',
      'Log4j',
      'JUnit',
      'Maven'
    ],
    image: travel,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },