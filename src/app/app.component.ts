import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="workspace">
      <header class="topbar">
        <div class="brand"><span class="brand-mark">▰</span><span>Dell <strong>AIOps</strong></span></div>
        <div class="top-actions" aria-label="Dashboard actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Notifications">◈</button>
          <button aria-label="Messages">▱</button>
          <button aria-label="User profile">♙</button>
        </div>
      </header>
      <div class="body">
        <aside class="sidebar">
          <nav aria-label="Main navigation">
            @for (item of navigation; track item) {
              <button [class.active]="item === 'Home'" type="button"><span>{{ itemIcons[item] }}</span>{{ item }}</button>
            }
          </nav>
        </aside>
        <section class="content">
          <div class="page-heading"><div><p class="eyebrow">OPERATIONS CENTER</p><h1>Overview</h1></div><button class="edit-button">EDIT DASHBOARD <span>⌄</span></button></div>
          <section class="summary-grid" aria-label="Overview metrics">
            @for (metric of metrics; track metric.label) {
              <article class="metric"><p>{{ metric.label }}</p><div><strong [class.danger]="metric.tone === 'danger'">{{ metric.value }}</strong><span>{{ metric.detail }}</span></div></article>
            }
          </section>
          <section class="dashboard-grid">
            <article class="panel health-panel"><div class="panel-heading"><h2>▧ System Health</h2><span>All Devices (277)⌄</span></div><div class="health-tabs"><button class="selected"><b>110</b><small>Poor</small></button><button><b>29</b><small>Fair</small></button><button><b>138</b><small>Good</small></button></div><div class="health-content"><div class="device-list"><small>10 of 110</small>@for (device of devices; track device.name) {<button type="button" [class.selected-device]="device.name === selectedDevice"><span>{{ device.name }}</span><small>{{ device.type }}</small><b>{{ device.score }}</b></button>}</div><div class="health-detail"><small>Top Health Issue</small><strong>Capacity <em>-40</em></strong><p>The storage pool Test_Dev_Pool is full and oversubscribed.</p></div></div><a href="/">GO TO SYSTEM HEALTH</a></article>
            <div class="side-stack"><article class="panel risk-panel"><div class="panel-heading"><h2>◉ Cybersecurity Risks</h2><span>108 Systems</span></div><div class="risk-banner">Potential Ransomware Incident</div><div class="risk-body"><strong>◉<small>High</small></strong><p><b>101</b> Misconfigurations<br><b>19</b> Security Advisories<br><b>4</b> Ransomware Incidents</p></div><a href="/">GO TO CYBERSECURITY</a></article><article class="panel entitlement"><div class="panel-heading"><h2>⚙ Entitlement Expiration</h2></div><div class="three-stats"><span><b class="danger">✖ 1</b>Expired</span><span><b>1</b>Within 30 days</span><span><b>1</b>Within 90 days</span></div><a href="/">GO TO ENTITLEMENTS AND SYSTEM LICENSES</a></article></div>
            <article class="panel capacity"><div class="panel-heading"><h2>▤ Capacity Approaching Full</h2><span>All⌄</span></div><div class="capacity-tabs"><b>! 8 <small>Imminent</small></b><span>3 Full</span><span>5 Within a week</span><span>31 Within a month</span></div><div class="capacity-row"><span>Disaster Recovery_Pool2<small>UNITY 400 | FCNCH0927C32F2 | Pool</small></span><b>Within 5 hours</b></div></article><article class="panel alerts"><div class="panel-heading"><h2>▧ System Alerts</h2><span>Last 24 hours</span></div><div class="three-stats"><span><b class="danger">✖ 126</b>Critical</span><span><b>6</b>Error</span><span><b>125</b>Warning</span></div><a href="/">GO TO ALERTS</a></article>
          </section>
        </section>
      </div>
    </main>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    .workspace { min-height: 100vh; background: #f7f8fb; color: #243447; }
    .topbar { height: 62px; display: flex; align-items: center; justify-content: space-between; padding: 0 28px; background: #fff; border-bottom: 1px solid #e2e7ed; }
    .brand { display: flex; align-items: center; gap: 10px; color: #0877b9; font-size: 18px; letter-spacing: .2px; }.brand-mark { color: #49a9d7; font-size: 22px; }.top-actions { display: flex; gap: 20px; }.top-actions button { border: 0; background: transparent; color: #39799e; font-size: 21px; }
    .body { display: flex; }.sidebar { width: 206px; min-height: calc(100vh - 62px); background: #fff; border-right: 1px solid #e5e8ed; padding-top: 16px; }.sidebar nav { display: grid; gap: 4px; }.sidebar button { border: 0; border-left: 3px solid transparent; background: #fff; color: #39434f; display: flex; align-items: center; gap: 13px; padding: 13px 24px; text-align: left; font-size: 14px; }.sidebar button.active { border-left-color: #008bd2; background: #f3f6f9; color: #0675b0; font-weight: 600; }
    .content { max-width: 1170px; flex: 1; padding: 27px 34px 50px; margin: 0 auto; }.page-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 22px; }.eyebrow { color: #66889f; font-size: 11px; letter-spacing: 1.3px; margin: 0 0 6px; }.page-heading h1 { font-size: 28px; font-weight: 500; margin: 0; }.edit-button { border: 0; background: transparent; color: #1874a5; font-size: 12px; font-weight: 700; }
    .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); background: #fff; border: 1px solid #e1e6eb; box-shadow: 0 2px 6px #152b3d0d; margin-bottom: 22px; }.metric { padding: 19px 23px; border-right: 1px solid #e7ebef; }.metric:last-child { border-right: 0; }.metric p { margin: 0 0 13px; color: #576a78; font-size: 13px; }.metric div { display: flex; align-items: baseline; gap: 10px; }.metric strong { color: #2185b6; font-size: 25px; font-weight: 500; }.metric strong.danger, .danger { color: #c51c42; }.metric span { color: #6d7982; font-size: 11px; }
    .dashboard-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }.panel { background: #fff; border: 1px solid #e1e6eb; box-shadow: 0 2px 6px #152b3d0d; padding: 18px 20px; }.panel h2 { font-size: 16px; font-weight: 500; margin: 0; }.panel-heading { display: flex; justify-content: space-between; align-items: center; color: #586c79; }.panel-heading > span { color: #667d8a; font-size: 11px; }.health-panel { min-height: 365px; }.health-tabs { display: flex; justify-content: center; gap: 44px; border-bottom: 1px solid #dfe4e8; margin: 20px 0 12px; }.health-tabs button { border: 0; border-bottom: 3px solid transparent; background: transparent; padding: 0 16px 9px; color: #7a8388; }.health-tabs button.selected { border-bottom-color: #2f91bd; }.health-tabs b { display: block; color: #c71f40; font-size: 22px; }.health-tabs button:nth-child(2) b { color: #d99a09; }.health-tabs button:nth-child(3) b { color: #6b9f05; }.health-tabs small { font-size: 11px; }.health-content { display: grid; grid-template-columns: 1fr 1.2fr; gap: 10px; height: 190px; }.device-list { border-right: 1px solid #e5e9ed; overflow: hidden; }.device-list > small { color: #7f8b93; font-size: 10px; }.device-list button { width: 100%; position: relative; display: grid; text-align: left; gap: 3px; border: 0; border-bottom: 1px solid #edf0f2; background: #fff; padding: 8px 28px 8px 5px; color: #247eae; font-size: 12px; }.device-list button b { position: absolute; right: 8px; top: 13px; color: #68757d; font-size: 11px; }.device-list button small { color: #7f8a91; font-size: 9px; }.selected-device { background: #f1f7fb !important; }.health-detail { background: #fbfbfd; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 15px; }.health-detail small { color: #7a858c; }.health-detail strong { color: #454e56; font-size: 23px; font-weight: 400; margin: 18px 0 12px; }.health-detail em { color: #bc2749; font-style: normal; margin-left: 16px; }.health-detail p { color: #66717a; font-size: 12px; max-width: 280px; }.panel a { display: inline-block; margin-top: 16px; color: #1075a9; font-size: 10px; font-weight: 700; text-decoration: none; }
    .side-stack { display: grid; gap: 20px; }.risk-panel { min-height: 165px; }.risk-banner { background: #cf1e3f; color: #fff; font-size: 11px; margin: 12px -20px 9px; padding: 5px 10px; }.risk-body { display: flex; align-items: center; gap: 22px; }.risk-body > strong { color: #cd2044; font-size: 35px; text-align: center; }.risk-body > strong small { display: block; color: #c92945; font-size: 10px; }.risk-body p { color: #637680; font-size: 10px; line-height: 1.7; }.risk-body p b { color: #2185b6; margin-right: 5px; }.entitlement { min-height: 130px; }.three-stats { display: flex; justify-content: space-around; text-align: center; margin-top: 32px; }.three-stats span { color: #65727a; font-size: 10px; }.three-stats b { display: block; color: #2585b4; font-size: 21px; font-weight: 500; margin-bottom: 5px; }.capacity { min-height: 185px; }.capacity-tabs { display: flex; align-items: center; gap: 28px; border-bottom: 1px solid #e0e5e8; margin-top: 21px; padding: 0 3px 10px; color: #68747d; font-size: 13px; }.capacity-tabs b { color: #2989b5; }.capacity-tabs small { font-size: 11px; }.capacity-row { display: flex; justify-content: space-between; margin-top: 15px; color: #287da8; font-size: 12px; }.capacity-row small { display: block; color: #737e84; font-size: 9px; margin-top: 4px; }.capacity-row b { color: #c22a4a; font-size: 11px; }.alerts { min-height: 185px; }.alerts .three-stats { margin-top: 42px; }
    @media (max-width: 900px) { .sidebar { width: 170px; }.content { padding: 22px 18px; }.dashboard-grid { grid-template-columns: 1fr; }.side-stack { grid-template-columns: 1fr 1fr; }.summary-grid { grid-template-columns: repeat(2, 1fr); }.metric:nth-child(2) { border-right: 0; }.metric:nth-child(-n+2) { border-bottom: 1px solid #e7ebef; } }
    @media (max-width: 620px) { .topbar { padding: 0 16px; }.sidebar { display: none; }.content { padding: 18px 12px 30px; }.page-heading { align-items: start; }.summary-grid, .side-stack { grid-template-columns: 1fr; }.metric { border-right: 0; border-bottom: 1px solid #e7ebef; }.metric:last-child { border-bottom: 0; }.health-content { grid-template-columns: 1fr; height: auto; }.device-list { border-right: 0; max-height: 160px; }.health-detail { min-height: 150px; }.capacity-tabs { gap: 12px; flex-wrap: wrap; }.capacity-row { gap: 10px; }.top-actions { gap: 12px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly navigation = ['Home', 'Monitor', 'Manage', 'Optimize', 'Reports', 'Cybersecurity', 'Lifecycle', 'Admin'];
  readonly itemIcons: Record<string, string> = { Home: '⌂', Monitor: '▧', Manage: '▤', Optimize: '◌', Reports: '▣', Cybersecurity: '◉', Lifecycle: '⟳', Admin: '⚙' };
  readonly metrics = [
    { label: 'Connectivity', value: '295', detail: 'Connected', tone: 'normal' },
    { label: 'Contract Expiration', value: '27', detail: 'Within a Month', tone: 'normal' },
    { label: 'Collectors', value: '5', detail: 'With Issues', tone: 'normal' },
    { label: 'Updates', value: '3', detail: 'Available', tone: 'normal' }
  ];
  readonly devices = [
    { name: 'Test_Dev', type: 'UnityVSA | FCNCH0927C32F2 | Storage System', score: 60 },
    { name: 'Block-Boston', type: 'Block Storage Services | Storage System', score: 60 },
    { name: 'Account Management', type: 'ME5021 | CIOAPU | Storage System', score: 60 }
  ];
  readonly selectedDevice = 'Test_Dev';
}
