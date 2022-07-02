
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
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://code.jquery.com/jquery-3.6.0.min.js", true);
		xhr.onreadystatechange = function()
   		{
        if(xhr.readyState==4)
        {
			fs.mkdirSync(FolderPath+"/Jquery-js");
			fs.writeFile(path.join(FolderPath+"/Jquery-js", "index.js"), this.responseText, err=>{
				if(err){
					console.error(err);
					return vscode.window.showErrorMessage("Error");
				}
			});
        }
   		}
    	xhr.send();
		
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
