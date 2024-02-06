import k8s from '@kubernetes/client-node';

console.log('test');

const kc = new k8s.KubeConfig();
console.log(kc);
kc.loadFromDefault();

//const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
