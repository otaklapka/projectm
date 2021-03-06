export enum Route {
  SCENARIO_LIST = 'scenario-list',
  LOGIN = 'login',
  TESTER_LIST = 'tester-list',
  L1S1 = 'l1s1',
  L1S2 = 'l1s2',
  L1S3 = 'l1s3',
  L1S4 = 'l1s4',
  L2S1 = 'l2s1',
  L2S2 = 'l2s2',
  L2S3 = 'l2s3',
  L2S4 = 'l2s4',
  L3S1 = 'l3s1',
  L3S2 = 'l3s2',
  L3S3 = 'l3s3',
  L3S4 = 'l3s4',
  L4S1 = 'l4s1',
  L4S2 = 'l4s2',
  L4S3 = 'l4s3',
  L4S4 = 'l4s4',
  L5S1 = 'l5s1',
  L5S2 = 'l5s2',
  L5S3 = 'l5s3',
  L5S4 = 'l5s4',
}

export enum ScenarioInstruction {
  ONE = 'Nalezni zůstatek na peněžence a zdvojnásob ho přidáním prostředků ve stejné výšši.',
  TWO = 'Přidej libovolný výdaj.',
  THREE = 'Otevři seznam transakcí, najdi položku nájemné a vymaž jí.',
  FOUR = 'Přidej příjem - výplata ve výšši 30 000,- a poté zjisti celkový stav konta a přidej výdaj tak, aby hodnota peněženky byla přesně 30 000,-',
}
