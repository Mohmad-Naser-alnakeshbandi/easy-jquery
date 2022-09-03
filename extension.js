
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	
	console.log('Congratulations, your extension "easy-jquery" is now active!');

	let disposable = vscode.commands.registerCommand('easy-jquery.jquery', function () {
	
		const FolderPath= vscode.workspace.workspaceFolders[0].uri.path.toString().split(":")[1];
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


		vscode.window.showInformationMessage("creating Jquery Files");



		var xhrHTMLTemplate= new XMLHttpRequest();
		xhrHTMLTemplate.open("GET", "https://raw.githubusercontent.com/Mohmad-Naser-alnakeshbandi/easy-jquery/main/index.html", true);
		xhrHTMLTemplate.onreadystatechange = function()
   		{
        if(xhrHTMLTemplate.readyState==4)
        {
		
			fs.writeFile(path.join(FolderPath, "index.html"), this.responseText, err=>{
				if(err){
					console.error(err);
					return vscode.window.showErrorMessage("Error");
				}
			});

			fs.writeFile(path.join(FolderPath, "style.css"), "" , err=>{
				if(err){
					console.error(err);
				}
			});
        }
   		}
		   xhrHTMLTemplate.send();


		   var xhrJSTemplate= new XMLHttpRequest();
		   xhrJSTemplate.open("GET", "https://raw.githubusercontent.com/Mohmad-Naser-alnakeshbandi/easy-jquery/main/app.js", true);
		   xhrJSTemplate.onreadystatechange = function()
			  {
		   if(xhrJSTemplate.readyState==4)
		   {
			   fs.writeFile(path.join(FolderPath, "app.js"), this.responseText, err=>{
				   if(err){
					   console.error(err);
					   return vscode.window.showErrorMessage("Error");
				   }
			   });	
		   }
			  }
			  xhrJSTemplate.send();
		


		var xhrJS1 = new XMLHttpRequest();
		xhrJS1.open("GET", "https://code.jquery.com/jquery-3.6.0.min.js", true);
		xhrJS1.onreadystatechange = function()
   		{
        if(xhrJS1.readyState==4)
        {
			fs.mkdirSync(FolderPath+"/Jquery-JS-Folder");
			fs.writeFile(path.join(FolderPath+"/Jquery-JS-Folder", "jquery-3.6.0.js"), this.responseText, err=>{
				if(err){
					console.error(err);
					return vscode.window.showErrorMessage("Error");
				}
			});
        }
   		}
		xhrJS1.send();



		var xhrJS2 = new XMLHttpRequest();
		xhrJS2.open("GET", "https://code.jquery.com/ui/1.13.1/jquery-ui.js", true);
		xhrJS2.onreadystatechange = function()
   		{
        if(xhrJS2.readyState==4)
        {
			fs.writeFile(path.join(FolderPath+"/Jquery-JS-Folder", "jquery-ui.js"), this.responseText, err=>{
				if(err){
					console.error(err);
					return vscode.window.showErrorMessage("Error");
				}
			});
        }
   		}
		   xhrJS2.send();


		   var xhrcss1 = new XMLHttpRequest();
		   xhrcss1.open("GET", "https://code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css", true);
		   xhrcss1.onreadystatechange = function()
			  {
		   if(xhrcss1.readyState==4)
		   {
			   fs.mkdirSync(FolderPath+"/Jquery-CSS-Folder");
			   fs.writeFile(path.join(FolderPath+"/Jquery-CSS-Folder", "jquery-ui.css"), this.responseText, err=>{
				   if(err){
					   console.error(err);
					   return vscode.window.showErrorMessage("Error");
				   }
			   });
		   }
			  }
		   xhrcss1.send()

		
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
