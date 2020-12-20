
function copy_text() {
    let text = document.getElementById('templateCode').innerText;
    console.log(text)
    const el = document.createElement('textarea');

    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert("copied application code");
    }

function get_character_details() {
    let character_details = new Object();

    character_details['name'] = document.getElementById("inputFullName").value;
    character_details['nickname'] = document.getElementById("inputNickname").value;
    character_details['age'] = document.getElementById("inputAge").value;
    character_details['occupation'] = document.getElementById("inputOccupation").value;
    character_details['gender'] = document.getElementById("inputGender").value;
    character_details['orientation'] = document.getElementById("inputOrientation").value;
    character_details['membergroup'] = document.getElementById("inputMembergroup").value;
    character_details['faceclaim'] = document.getElementById("inputFaceclaim").value;
    character_details['contentrating'] = document.getElementById("inputContentRating").value;
    character_details['image_url'] = document.getElementById("inputImageURL").value;

    character_details['history'] = document.getElementById('inputHistory').value;

    character_details['about'] = document.getElementById("inputAbout").value;
    character_details['platonic'] = document.getElementById("inputPlatonic").value;
    character_details['romantic'] = document.getElementById("inputRomantic").value;
    character_details['antagonistic'] = document.getElementById("inputAntagonistic").value;
    character_details['other'] = document.getElementById("inputOther").value;

    character_details['ooc_img'] = document.getElementById("inputOOCURL").value;
    character_details['playerName'] = document.getElementById("inputOOCName").value;
    character_details['timezone'] = document.getElementById("inputTZ").value;
    character_details['contact_method'] = document.getElementById("inputContact").value;
    character_details['other_characters'] = document.getElementById("inputOtherChars").value;

    return character_details;

}

function update_template(character_dictionary) {
    // Change Template Sample
    document.getElementById("template_name").innerHTML = character_dictionary.name;
    document.getElementById("template_nickname").innerHTML = character_dictionary.nickname;
    document.getElementById("template_age").innerHTML = character_dictionary.age;
    document.getElementById("template_occupation").innerHTML = character_dictionary.occupation;
    document.getElementById("template_gender").innerHTML = character_dictionary.gender;
    document.getElementById("template_orientation").innerHTML = character_dictionary.orientation;
    document.getElementById("template_membergroup").innerHTML = character_dictionary.membergroup;
    document.getElementById("template_faceclaim").innerHTML = character_dictionary.faceclaim;
    document.getElementById("template_contentrating").innerHTML = character_dictionary.contentrating;
    document.getElementById("template_pic").style["background"] = "url(" + character_dictionary.image_url + ")";

    document.getElementById("template_history").innerHTML = character_dictionary.history;

    document.getElementById("template_about").innerHTML = character_dictionary.about;
    document.getElementById("template_platonic").innerHTML = character_dictionary.platonic;
    document.getElementById("template_romantic").innerHTML = character_dictionary.romantic;
    document.getElementById("template_antagonistic").innerHTML = character_dictionary.antagonistic;
    document.getElementById("template_other").innerHTML = character_dictionary.other;

    document.getElementById("player_img").src = character_dictionary.ooc_img;
    document.getElementById("template_ooc_name").innerHTML = character_dictionary.playerName;
    document.getElementById("template_tz").innerHTML = character_dictionary.timezone;
    document.getElementById("template_contact").innerHTML = character_dictionary.contact_method;
    document.getElementById("template_other_chars").innerHTML = character_dictionary.other_characters;
}

function update_code(character_dictionary) {
    // Template Code
    hundredeuroCode = `[dohtml]&lt;link href="https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text|Open+Sans:400,400i,700,700i" rel="stylesheet"&gt;

&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"&gt;

&lt;div class="hundredeuro"&gt;&lt;div id="${character_dictionary.membergroup}"&gt;

&lt;div class="tabs"&gt;&lt;div class="tab"&gt;&lt;input type="radio" id="tab-1" name="tab-group-1" checked&gt;&lt;label for="tab-1" title="image" style="padding-top: 35px;"&gt;&lt;i class="fa fa-picture-o" aria-hidden="true">&lt;/i&gt;&lt;/label&gt;&lt;div class="content"&gt;

&lt;div class="pic" style="background:url(${character_dictionary.image_url});"&gt;&lt;/div&gt;
                
&lt;/div&gt;&lt;/div&gt;&lt;div class="tab"&gt;&lt;input type="radio" id="tab-2" name="tab-group-1"&gt;&lt;label for="tab-2" title="basics"&gt;&lt;i class="fa fa-list" aria-hidden="true">&lt;/i&gt;&lt;/label&gt;&lt;div class="content"&gt;&lt;div class="info"&gt;&lt;ul&gt;

&lt;li&gt;&lt;b&gt;full name&lt;/b&gt; ${character_dictionary.name}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;nicknames&lt;/b&gt; ${character_dictionary.nickname}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;age&lt;/b&gt; ${character_dictionary.name}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;occupation&lt;/b&gt; ${character_dictionary.occupation}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;gender&lt;/b&gt; ${character_dictionary.gender}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;orientation&lt;/b&gt; ${character_dictionary.orientation}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;membergroup&lt;/b&gt; ${character_dictionary.membergroup}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;faceclaim&lt;/b&gt; ${character_dictionary.faceclaim}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;content rating&lt;/b&gt; ${character_dictionary.contentrating}&lt;/li&gt;

&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="tab"&gt;&lt;input type="radio" id="tab-3" name="tab-group-1"&gt;&lt;label for="tab-3" title="history"&gt;&lt;i class="fa fa-book" aria-hidden="true"&gt;&lt;/i&gt;&lt;/label&gt;&lt;div class="content"&gt;&lt;div class="body"&gt;

${character_dictionary.history.replaceAll("\n","&lt;br /&gt;")}

&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="tab"&gt;&lt;input type="radio" id="tab-4" name="tab-group-1"&gt;&lt;label for="tab-4" title="history"&gt;&lt;i class="fa fa-comments-o" aria-hidden="true"&gt;&lt;/i&gt;&lt;/label&gt;&lt;div class="content"&gt;&lt;div class="body"&gt;

&lt;h1&gt;about&lt;/h1&gt;
${character_dictionary.about.replaceAll("\n","&lt;br /&gt;")}

&lt;h1&gt;platonic&lt;/h1&gt;
${character_dictionary.platonic.replaceAll("\n","&lt;br /&gt;")}

&lt;h1&gt;romantic&lt;/h1&gt;
${character_dictionary.romantic.replaceAll("\n","&lt;br /&gt;")}

&lt;h1&gt;antagonistic&lt;/h1&gt;
${character_dictionary.antagonistic.replaceAll("\n","&lt;br /&gt;")}
                        
&lt;h1&gt;other&lt;/h1&gt;
${character_dictionary.other.replaceAll("\n","&lt;br /&gt;")}

&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="tab"&gt;&lt;input type="radio" id="tab-5" name="tab-group-1"&gt;&lt;label for="tab-5" title="ooc" style="padding-top: 35px; border-bottom: solid 1px #ddd;"&gt;&lt;i class="fa fa-user-circle-o" aria-hidden="true"&gt;&lt;/i&gt;&lt;/label&gt;&lt;div class="content"&gt;
                    
&lt;img src="${character_dictionary.ooc_img}"&gt;
                    
&lt;div class="info"&gt;&lt;ul style="padding: 0;"&gt;

&lt;li&gt;&lt;b&gt;ooc name&lt;/b&gt; ${character_dictionary.playerName}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;timezone&lt;/b&gt; ${character_dictionary.timezone}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;contact&lt;/b&gt; ${character_dictionary.contact_method}&lt;/li&gt;
&lt;li&gt;&lt;b&gt;other characters&lt;/b&gt; ${character_dictionary.other_characters}&lt;/li&gt;

&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;span class="mitzicredit"&gt;&lt;a href="http://shine.jcink.net/index.php?showuser=8549" title="MITZI @ SHINE"&gt;MITZI&lt;/a&gt;&lt;/span&gt;[/dohtml]`;


    templateCode = document.getElementById("templateCode").innerHTML;
    
    document.getElementById("templateCode").innerHTML = hundredeuroCode;

}

function fillForm(id) {
    // Get the basic info from the form
    character_dict = get_character_details();

    update_template(character_dict);

    update_code(character_dict);            
                
}