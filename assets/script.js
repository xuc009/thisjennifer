function toggleIndex() {
  var index = document.getElementById("index");
  if (index.style.display === "none") {
    index.style.display = "block";
  } else {
    index.style.display = "none";
  }
}

var links = new Array (
  //jlo , j aniston, hudson, lawrence, garner, connely, coolidge
  //1
  "https://docs.google.com/document/d/1XYS2jbrmY5izwNAE8BO_7al9YTPWEVfK6blEj6_84tU/edit?usp=sharing",
  //2
  "https://drive.google.com/open?id=1bbCTjdR_uISde3FP2N_QHGESVIs3hUV4ztV1tslSeYE",
  //3
  "https://drive.google.com/open?id=1v5wh-Eo4CV1ju3boQOKu28VMm_CTuGehFmRf9hFEQ8k",
  //4
  "https://drive.google.com/open?id=16X89PuMYBou9IUiwpjJUufaNeInyI6b2A27KIoIj2ow",
  //5
  "https://drive.google.com/open?id=1DLtttEenFQcu_HtNqc0fiiUTL2JzBxxJ0OJYtWoBs1I",
  //6
  "https://docs.google.com/document/d/10_BshEA5IfCrC6bq1RilFCo83N9bCcdyDCy8-zvSmSU/edit?usp=sharing",
  //7
  "https://docs.google.com/document/d/1oH4E0WJ2Sqre4DMLYiFCGt1fhWgM7WMlRiodkvMcEME/edit?usp=sharing",
  //8
  "https://drive.google.com/open?id=1j_l5t4EHFHqdvWUwFJvWGC7d_Jqfc8ze1I5459zhuDU",
  //9
  "https://drive.google.com/open?id=1KQv3Y3qd7kpr4nDmXACeCSbfWvWErXezW4nN5TCIP3I",
  //10
  "https://drive.google.com/open?id=1pv1I19TTEEdvEpE0LRI9xIsC5xZ5pSFX8HofkWzTJ1M",
  //11
  "https://drive.google.com/open?id=1Xi1zR2SpxsD0rsk5B1IgKau2s0aMy-MxsW8au-BKlbg",
  //12
  "https://docs.google.com/document/d/1KGwgDi_84HhFxFHb-q4TMyF3p90jWf-VAgMbMCp2ctk/edit?usp=sharing",
  //13
  "https://docs.google.com/document/d/1TH91m9JN5zFkOv8eDISYc1INA0Yj_Raaudsv7QxjgQg/edit?usp=sharing",
  //14
  "https://docs.google.com/document/d/1sNdGe6iqF1i684tX0N_bxjK6ZteTo9ibPd-nrJUhjSc/edit?usp=sharing",
  //15
  "https://docs.google.com/document/d/1GygNCwjm8InCLexzz-MJZQz6O3JLX1Gp9MeAclBOBNo/edit?usp=sharing",
  //16
  "https://docs.google.com/document/d/1vkVW9GEoK2f7hNwbikj9JQHEVmus9WcBsaKx2Sr8shQ/edit?usp=sharing",
  //17
  "https://docs.google.com/document/d/1Av8JAKJ1hKXilhDLaGoQM4VZe989KEYf6FhtqzHnBCg/edit?usp=sharing",
  //18
  "https://docs.google.com/document/d/1DckhNBszeKadbLpsRsseeZpFKxsFCiF9m7qzmTgyhng/edit?usp=sharing",
  //19
  "https://docs.google.com/document/d/12riE1hOps8TWg5YBURZm8A6UkxMw3mRDLFRoQIE6xUQ/edit?usp=sharing",
  //20
  "https://docs.google.com/document/d/1D8ABk7nMHMeO60ROpeS2nW3eRMziJTqD4TOBzlBRgg0/edit?usp=sharing",
  //21
  "https://docs.google.com/document/d/1KfXLvvB56mFCBUNwjrPOhmJUDFWZBorj5uORE5MPBYI/edit?usp=sharing",
  //22
  "https://docs.google.com/document/d/19iFfvAt4l5L_KD9IQzutaAnYvd7Hzz5uuejg_ogwkdE/edit?usp=sharing",
  //23
  "https://docs.google.com/document/d/1yumTdnXqQ_jGCDoR3WDL5DabDVx6PgWplYBNy3NzOY0/edit?usp=sharing",
  //24 
  "https://docs.google.com/document/d/1Tctt-pFJRtd1EqKxfsKbCMuFQfYjc56D2CY3yvOLL0c/edit?usp=sharing",
  //25
  "https://docs.google.com/document/d/1ZIUP44GkelIfnmLIv7WG0_HINZ-IcL83108YJFqjp9E/edit?usp=sharing",
  //26
  "https://docs.google.com/document/d/1BZr26OrQ54_SCmsOCVTJ32K-klbQgGD2KDOI25aqM-E/edit?usp=sharing",
  //27
  "https://docs.google.com/document/d/1l2h39EeUO2EgTyp4WwgaylGEhTpIhW7AbfwQe7Z3MPA/edit?usp=sharing",
  //28
  "https://docs.google.com/document/d/1ysCqFXoCrKBQHlyCxUVRXKKgvGjUK3kADaZ0KOcv98g/edit?usp=sharing",
  //29
  "https://docs.google.com/document/d/12OWwxtLwXx1u156EOGjvnQc70mNdYOw1XFkHUHKjmqQ/edit?usp=sharing",
  //30
  "https://docs.google.com/document/d/1lBSRpMXwVRtjRg-vwRHJI0kjgucz5c0SiHO7hIdh1wk/edit?usp=sharing",
  //31
  "https://docs.google.com/document/d/1Bdj5KC-L833w1goxp83MwoBWLYpAyOpAeDi4ojlyTpQ/edit?usp=sharing",
  //32
  "https://docs.google.com/document/d/1xON0rtXoaeIPceZ66EqNIXj103x6KVgreqA15sgvaBk/edit?usp=sharing",
  //33
  "https://docs.google.com/document/d/1m-UlDSojwTfpqQtzSpyffkgAcqwmYsxZdmoKQFwA-Xs/edit?usp=sharing",
  //34
  "https://docs.google.com/document/d/1NEv0y3DGCAcf7cmiBFLzvxGiVOv7xo4luhWeVpP98qo/edit?usp=sharing",
  //35
  "https://docs.google.com/document/d/1907BNwwG7FqtEc2WYdkYsI0QkecQE7YRvVwxpSTm4js/edit?usp=sharing",
  //36
  "https://docs.google.com/document/d/17sm4OhjwS53pchf7PaVEt94OuhlmORVNbxmzkmID8Ak/edit?usp=sharing",
  //37
  "https://docs.google.com/document/d/1WoQhGlPemcQFd8jzoRzkFChYNZ8U0AyD2Lc_vbqgqGE/edit?usp=sharing",
  //38
  "https://docs.google.com/document/d/1F2oErx_Ad0SdYnHLpLRtJvMPvbOQA3FAhR52m6dvKRI/edit?usp=sharing",
  //39
  "https://docs.google.com/document/d/1S4Udq4KgkJeMml4WrEv06RoChxAxt05wXmHWKfuWhbk/edit?usp=sharing",
  //40
  "https://docs.google.com/document/d/1gpscB413a-v0UQmGNrMZ0QJJqhEvvtQs1YPSbw12KMo/edit?usp=sharing",
  //41
  "https://docs.google.com/document/d/1zadlibz7vDCtu5DoxeimXkadANVaoZL94QKZDfaP4zo/edit?usp=sharing",
  //42
  "https://docs.google.com/document/d/1jhwL_NYJHgYopmqBVRMyVaS6q3VgZD78cmnz9JrwLEg/edit?usp=sharing",
  //43
  "https://docs.google.com/document/d/14qB_UcXEOlmNS8eeF-rNo2X_IiVq5u95LOaEY9eF-dk/edit?usp=sharing",
  //44
  "https://docs.google.com/document/d/13EsNYW_sF1MpB2wRCZIUuJCrbN92qa0WZQuMHYL5Pag/edit?usp=sharing",
  //45
  "https://docs.google.com/document/d/1voxjVEpG_hDiP9q2sAKtr1GTwsFa8e8zvd68AbSggIA/edit?usp=sharing",
  //46
  "https://docs.google.com/document/d/1hjut1Z5RoryzWIajiMs5vu6tQNZxGNpdho_TGtDchG4/edit?usp=sharing",
  //47
  "https://docs.google.com/document/d/1YwHgsglfJAEcobsil4fn3yjYP0M9mxQBh0yy1duKPPM/edit?usp=sharing",
  //48
  "https://docs.google.com/document/d/1qwXKm6HDib7JwRm0yOD1zNZ43JOmiIZltIxQiwz_f14/edit?usp=sharing",
  //49
  "https://docs.google.com/document/d/1LpiAOUBa8ayYUtlbWnjr3NVsNQUdZJb6uAvx3oRVr10/edit?usp=sharing",
  //50
  "https://docs.google.com/document/d/1ELBF0GVfzWm9-H2iJjAf7WRY20-hxhjhoHbYIjpuz_4/edit?usp=sharing"
  );


function nextResult() {
  var randomLink = Math.floor(1+Math.random() * links.length);
  console.log(links[randomLink]);
  document.getElementById("doc").src=links[randomLink];
  links.splice(randomLink,1);
  console.log(links);
}

function newLink(){
  var randomLink = Math.floor(1+Math.random() * links.length);
  console.log(links[randomLink]);
  var iframestring = `<iframe id="doc" name="myFrame" src="${links[randomLink]}"></iframe>`
  document.getElementById("container").insertAdjacentHTML("afterend", iframestring);
  links.splice(randomLink,1);
  console.log(links);
}

