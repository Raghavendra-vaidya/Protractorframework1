var HtmlReporter = require('protractor-beautiful-reporter');
var dt = new Date();

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/login_Spec.js'],

     multiCapabilities:[
        {
         'browserName': 'chrome', 
           'chromeOptions': 
           {
            'useAutomationExtension': false
          }

        }
    //  {
    //    browserName: 'internet explorer',
    //    directConnect:false,
    //    platform: 'ANY',
    //    version: '11'
    //  }
  ],
    // localSeleniumStandaloneOpts : 
    //  {
    //   jvmArgs : ["-Dwebdriver.ie.driver=../drivers/IEDriverServer.exe"] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe--"-Dwebdriver.ie.driver=../drivers/chromedriver.exe","-Dwebdriver.gecko.driver=../drivers/geckodriver.exe""
    //  },
      jasmineNodeOpts:{
     //    onComplete: null,
    // //     showColors: true,
          defaultTimeoutInterval: 300000
    //  }ar d

  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots',
       screenshotsSubfolder: 'images',
       jsonsSubfolder: 'jsons',
       docTitle: 'All Test cases' ,
       docName: 'AutomationReport.html',
       preserveDirectory: false,
       gatherBrowserLogs: false,
      
       sortFunction: function sortFunction(a, b) {
        if (a.cachedBase === undefined) {
            var aTemp = a.description.split('|').reverse();
            a.cachedBase = aTemp.slice(0).slice(0,-1);
            a.cachedName = aTemp.slice(0).join('');
        };
        if (b.cachedBase === undefined) {
            var bTemp = b.description.split('|').reverse();
            b.cachedBase = bTemp.slice(0).slice(0,-1);
            b.cachedName = bTemp.slice(0).join('');
        };
   
        var firstBase = a.cachedBase;
        var secondBase = b.cachedBase;
   
        for (var i = 0; i < firstBase.length || i < secondBase.length; i++) {
   
            if (firstBase[i] === undefined) { return -1; }
            if (secondBase[i] === undefined) { return 1; }
            if (firstBase[i].localeCompare(secondBase[i]) === 0) { continue; }
            return firstBase[i].localeCompare(secondBase[i]);
        }
   
        var firstTimestamp = a.timestamp;
        var secondTimestamp = b.timestamp;
   
        if(firstTimestamp < secondTimestamp) return -1;
        else return 1;
    }

       //takeScreenShotsOnlyForFailedSpecs: true
    }).getJasmine2Reporter());
 }

}