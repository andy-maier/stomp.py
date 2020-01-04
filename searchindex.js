Search.setIndex({docnames:["api","commandline","index","intro","modules","otherprojects","quickstart","stomp","stomp.adapter"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["api.rst","commandline.rst","index.rst","intro.rst","modules.rst","otherprojects.rst","quickstart.rst","stomp.rst","stomp.adapter.rst"],objects:{"":{stomp:[7,0,0,"-"]},"stomp.adapter":{multicast:[8,0,0,"-"]},"stomp.adapter.multicast":{MulticastConnection:[8,1,1,""],MulticastTransport:[8,1,1,""]},"stomp.adapter.multicast.MulticastConnection":{connect:[8,2,1,""],disconnect:[8,2,1,""],send_frame:[8,2,1,""],subscribe:[8,2,1,""],unsubscribe:[8,2,1,""]},"stomp.adapter.multicast.MulticastTransport":{attempt_connection:[8,2,1,""],process_frame:[8,2,1,""],receive:[8,2,1,""],send:[8,2,1,""],stop:[8,2,1,""]},"stomp.connect":{BaseConnection:[7,1,1,""],StompConnection10:[7,1,1,""],StompConnection11:[7,1,1,""],StompConnection12:[7,1,1,""]},"stomp.connect.BaseConnection":{get_listener:[7,2,1,""],get_ssl:[7,2,1,""],is_connected:[7,2,1,""],remove_listener:[7,2,1,""],set_listener:[7,2,1,""],set_receipt:[7,2,1,""],set_ssl:[7,2,1,""]},"stomp.connect.StompConnection10":{connect:[7,2,1,""],disconnect:[7,2,1,""]},"stomp.connect.StompConnection11":{connect:[7,2,1,""],disconnect:[7,2,1,""]},"stomp.connect.StompConnection12":{connect:[7,2,1,""],disconnect:[7,2,1,""]},"stomp.exception":{ConnectFailedException:[7,3,1,""],ConnectionClosedException:[7,3,1,""],InterruptedException:[7,3,1,""],NotConnectedException:[7,3,1,""],StompException:[7,3,1,""]},"stomp.listener":{ConnectionListener:[7,1,1,""],HeartbeatListener:[7,1,1,""],PrintingListener:[7,1,1,""],Publisher:[7,1,1,""],StatsListener:[7,1,1,""],TestListener:[7,1,1,""],WaitingListener:[7,1,1,""]},"stomp.listener.ConnectionListener":{on_before_message:[7,2,1,""],on_connected:[7,2,1,""],on_connecting:[7,2,1,""],on_disconnected:[7,2,1,""],on_error:[7,2,1,""],on_heartbeat:[7,2,1,""],on_heartbeat_timeout:[7,2,1,""],on_message:[7,2,1,""],on_receipt:[7,2,1,""],on_receiver_loop_completed:[7,2,1,""],on_send:[7,2,1,""]},"stomp.listener.HeartbeatListener":{on_connected:[7,2,1,""],on_disconnected:[7,2,1,""],on_error:[7,2,1,""],on_heartbeat:[7,2,1,""],on_message:[7,2,1,""],on_receipt:[7,2,1,""],on_send:[7,2,1,""]},"stomp.listener.PrintingListener":{on_before_message:[7,2,1,""],on_connected:[7,2,1,""],on_connecting:[7,2,1,""],on_disconnected:[7,2,1,""],on_error:[7,2,1,""],on_heartbeat:[7,2,1,""],on_heartbeat_timeout:[7,2,1,""],on_message:[7,2,1,""],on_receipt:[7,2,1,""],on_send:[7,2,1,""]},"stomp.listener.Publisher":{get_listener:[7,2,1,""],remove_listener:[7,2,1,""],set_listener:[7,2,1,""]},"stomp.listener.StatsListener":{on_connecting:[7,2,1,""],on_disconnected:[7,2,1,""],on_error:[7,2,1,""],on_heartbeat:[7,2,1,""],on_heartbeat_timeout:[7,2,1,""],on_message:[7,2,1,""],on_send:[7,2,1,""]},"stomp.listener.TestListener":{get_latest_message:[7,2,1,""],on_before_message:[7,2,1,""],on_connected:[7,2,1,""],on_connecting:[7,2,1,""],on_disconnected:[7,2,1,""],on_error:[7,2,1,""],on_heartbeat:[7,2,1,""],on_heartbeat_timeout:[7,2,1,""],on_message:[7,2,1,""],on_receipt:[7,2,1,""],on_receiver_loop_completed:[7,2,1,""],on_send:[7,2,1,""],wait_for_heartbeat:[7,2,1,""],wait_for_message:[7,2,1,""]},"stomp.listener.WaitingListener":{on_disconnected:[7,2,1,""],on_receipt:[7,2,1,""],wait_on_disconnected:[7,2,1,""],wait_on_receipt:[7,2,1,""]},"stomp.protocol":{Protocol10:[7,1,1,""],Protocol11:[7,1,1,""],Protocol12:[7,1,1,""]},"stomp.protocol.Protocol10":{abort:[7,2,1,""],ack:[7,2,1,""],begin:[7,2,1,""],commit:[7,2,1,""],connect:[7,2,1,""],disconnect:[7,2,1,""],send:[7,2,1,""],send_frame:[7,2,1,""],subscribe:[7,2,1,""],unsubscribe:[7,2,1,""]},"stomp.protocol.Protocol11":{abort:[7,2,1,""],ack:[7,2,1,""],begin:[7,2,1,""],commit:[7,2,1,""],connect:[7,2,1,""],disconnect:[7,2,1,""],nack:[7,2,1,""],send:[7,2,1,""],send_frame:[7,2,1,""],subscribe:[7,2,1,""],unsubscribe:[7,2,1,""]},"stomp.protocol.Protocol12":{ack:[7,2,1,""],connect:[7,2,1,""],nack:[7,2,1,""],send:[0,2,1,""],subscribe:[0,2,1,""]},"stomp.transport":{BaseTransport:[7,1,1,""],Transport:[7,1,1,""]},"stomp.transport.BaseTransport":{attempt_connection:[7,2,1,""],cleanup:[7,2,1,""],disconnect_socket:[7,2,1,""],get_listener:[7,2,1,""],is_connected:[7,2,1,""],notify:[7,2,1,""],override_threading:[7,2,1,""],process_frame:[7,2,1,""],receive:[7,2,1,""],remove_listener:[7,2,1,""],send:[7,2,1,""],set_connected:[7,2,1,""],set_listener:[7,2,1,""],set_receipt:[7,2,1,""],start:[7,2,1,""],stop:[7,2,1,""],transmit:[7,2,1,""],wait_for_connection:[7,2,1,""]},"stomp.transport.Transport":{attempt_connection:[7,2,1,""],cleanup:[7,2,1,""],disconnect_socket:[7,2,1,""],get_ssl:[7,2,1,""],is_connected:[7,2,1,""],receive:[7,2,1,""],send:[7,2,1,""],set_ssl:[7,2,1,""]},"stomp.utils":{Frame:[7,1,1,""],calculate_heartbeats:[7,4,1,""],clean_headers:[7,4,1,""],clean_lines:[7,4,1,""],convert_frame:[7,4,1,""],decode:[7,4,1,""],default_create_thread:[7,4,1,""],encode:[7,4,1,""],get_errno:[7,4,1,""],get_uuid:[7,4,1,""],is_localhost:[7,4,1,""],join:[7,4,1,""],length:[7,4,1,""],merge_headers:[7,4,1,""],pack:[7,4,1,""],parse_frame:[7,4,1,""],parse_headers:[7,4,1,""]},stomp:{adapter:[8,0,0,"-"],colours:[7,0,0,"-"],connect:[7,0,0,"-"],constants:[7,0,0,"-"],exception:[7,0,0,"-"],listener:[7,0,0,"-"],protocol:[7,0,0,"-"],transport:[7,0,0,"-"],utils:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function"},terms:{"13e0":0,"13e01":0,"14aa2":0,"14ab2":0,"14b03":0,"14b04":0,"14b05":0,"27ff":0,"3f1a":0,"46a3":0,"4a72":0,"4e11":0,"72348a94f5c":0,"825a5cd6":0,"845e36d48412":0,"8ba8":0,"9e3c":0,"boolean":7,"byte":[7,8],"case":0,"caste\u00f1ada":3,"catch":7,"char":7,"class":[0,6,7,8],"default":[0,1,6,7],"dur\u00e1n":3,"final":0,"float":7,"function":7,"import":[0,6],"int":7,"long":7,"null":7,"return":[0,7,8],"short":5,"skytt\u00e4":3,"true":[0,6,7],"try":[0,7],And:[0,1],For:7,One:0,TLS:7,The:[0,3,7],There:0,Use:[0,7],Useful:7,Using:[2,5],__init__:0,__reconnect_attempts_max:7,_sslmethod:[0,7],a00:0,abil:[0,1],abort:[0,1,7],about:2,abov:0,accept:0,access:[1,3,6],accord:7,accordingli:7,ack:[1,2,6,7,8],acknowledg:[0,7],action:0,activemq:3,actual:7,adapt:[4,7],add:7,added:3,addit:[0,7],address:[0,1],admin:[0,1,6],after:[1,2,3,6,7],afterward:0,against:7,agnost:7,all:[0,3,7],allow:[0,7],also:[0,1,5,7],altern:7,andrea:3,ani:[0,7],anyth:7,anywai:0,apach:[0,5,7],apart:1,api:[1,2],apollo:0,app:7,appli:7,applic:[2,3],arg:7,arguabl:0,argument:[1,6,7],argv:6,arriv:7,artemi:5,articl:5,associ:7,assum:[0,6],attack:7,attempt:7,attempt_connect:[7,8],attribut:7,authent:7,author:7,auto:[0,6,7,8],auto_content_length:[0,7],auto_decod:[0,7],automat:[0,7],avail:[3,7],avoid:7,awai:3,b39f3136:0,back:0,backward2:[],backward3:[],backward:[],backwardsock25:[],backwardsock26:[],backwardsock:[],base:[3,7,8],baseconnect:[7,8],basetransport:7,basic:3,beat:[0,7],been:[3,7],befor:[0,7],begin:[0,1,7],behaviour:7,below:0,between:[0,7],beyond:7,bin:1,bodi:[0,6,7,8],body_encod:[],bool:[0,7,8],both:3,brigg:[2,7],broken:0,broker:[0,3,5,6,7,8],build:0,bump:7,byte_data:7,ca_cert:7,calcul:7,calculate_heartbeat:7,call:[0,3,7],callback:7,can:[0,1,2,6,7],cern:5,cert:[1,7],cert_fil:7,cert_valid:7,certif:7,chang:[],char_data:7,charact:7,chaskiel:3,chb:7,check:[0,2,7],chueyr:3,chunk:7,ciciliati:3,clean:[7,8],clean_head:7,clean_lin:7,cleanup:7,clear:7,cli:[1,3],client:[0,2,3,7],close:7,cmd:[7,8],code:[0,3,6],collect:0,color:[],colour:4,com:7,combin:7,comma:1,command:[2,3,7],commit:[0,1,7],common:7,commonnam:7,commun:[3,7],compat:[],complet:[0,7],compris:[0,7],configur:7,conn:[0,6],connect:[1,2,4,6,8],connect_and_subscrib:0,connectfailedexcept:7,connection10:0,connection11:0,connection12:0,connectionclosedexcept:7,connectionlisten:[0,6,7],consequ:0,consid:0,constant:4,construct:7,consum:[0,7],consumpt:7,contact:[],contain:[0,1,7],content:[0,2,4],content_typ:[0,7],continu:0,contribut:2,contributor:2,conveni:8,convert:7,convert_fram:7,correspond:0,could:[0,3],count:7,coverag:2,creat:[2,3,6,7],create_thread_fc:7,creation:7,current:[1,3,7],current_host_and_port:7,dai:3,data:7,date:5,deal:2,decid:0,decod:7,def:[0,6],default_create_thread:7,definit:7,delai:7,depart:5,deprec:7,describ:7,descript:[0,1,7],destin:[0,1,6,7,8],detail:[0,7],detect:7,determin:7,develop:[],dict:[0,7,8],dictionari:7,didn:3,differ:[0,1,2,7],dir:1,directli:7,directori:6,discard:0,disconnect:[2,6,7,8],disconnect_socket:7,discov:3,displai:[],distant:3,distinct:[],django:5,document:1,doesn:7,don:[0,8],done:7,drop:0,dump:1,each:[0,7],easili:3,effect:7,either:[0,6,7],els:[3,7],empti:7,en1:0,enabl:[1,7],encod:[0,7,8],encoded_fram:[7,8],endless:3,enforc:[0,7],enhanc:3,ensur:7,entri:7,eof:1,equal:7,err_msg:7,errno:7,error:[0,1,6,7],establish:[2,7,8],etc:[1,5],eugen:3,even:3,eventu:5,exampl:[0,2,6,7],exceed:7,except:4,execut:[1,6],exit:[1,7,8],extra:7,factor:7,fail:7,failov:0,failur:0,fals:[0,7,8],fe80:0,fe90:0,featur:3,fernando:3,few:0,file:[1,7],filenam:1,find:2,fine:2,finish:7,first:[0,3,7],folk:2,follow:[0,1,6],for_host:7,found:[2,7],frame:[0,7,8],frame_str:[7,8],frame_typ:7,from:[0,1,7,8],full:1,further:2,futur:7,gavin:3,gdaniec:3,gener:[0,7],get:[1,2,7],get_errno:7,get_latest_messag:7,get_listen:7,get_socket:[],get_ssl:7,get_uuid:7,getpeercert:7,github:[0,2,3,7],give:0,given:7,grace:0,gracefulli:0,greater:[],grundman:3,guest:0,had:3,handl:7,handler:0,handshak:7,has:[0,3,7],have:[3,7,8],header:[0,1,6,7,8],header_map_list:7,heart:[0,7],heart_beat_receive_scal:[0,7],heartbeat:[0,1,7],heartbeatlisten:7,held:0,hello:[1,6],help:[1,2,6],helper:7,here:[0,2,6],herebi:6,host:[0,1,7],host_and_port:[0,7],hostnam:[1,7],how:7,html:[0,2,7],http:[0,2,7],idea:0,identifi:[0,7],ids:0,implement:[0,7],incept:3,includ:7,incom:7,incomplet:5,increas:7,increment:7,independ:7,index:2,individu:[0,7],infinit:7,info:[0,2,7],inform:[6,7],initi:[0,7],initialis:[0,7],inlin:1,input:[],input_prompt:[],insid:0,instal:[1,3,6],instanti:7,instead:1,integ:1,integr:5,inter:3,interact:0,interfac:[6,7],intermitt:3,interrupt:7,interruptedexcept:7,introduct:2,invok:7,ipv6:0,is_connect:7,is_localhost:7,issu:[2,3],itch:3,its:[3,7],itself:7,jason:[2,7],jasonrbrigg:7,jayson:3,jbossmessag:3,joe:3,join:[6,7],juli:5,julian:3,just:0,keep:7,keepal:[0,7],kei:[1,7],key_fil:7,keyword_head:[0,7,8],know:7,kwarg:7,larg:[1,2],last:7,least:1,leav:7,length:[0,7],let:7,level:7,lib:6,librari:[3,5,6,7],licens:7,line:[2,3,7],list:[0,1,3,5,6,7],listen:[0,1,4,6],littl:3,local:[0,7],localhost:[0,1,6,7],log:1,login:[0,7],longer:[0,7],look:[0,3],loop:7,loopback:7,lost:7,lower:[],lstnr:7,machin:0,main:7,man:7,manag:7,map:[0,7],march:5,martin:3,maximum:7,mcast:8,mean:7,mechan:7,member:7,mention:7,merg:0,merge_head:7,messag:[1,2,3,5,6,7,8],method:[0,7,8],middl:7,might:0,mime:[0,7],minut:5,mode:7,modul:[2,4],more:[0,1,6,7],most:7,mostli:7,move:2,multicast:[4,7],multicastconnect:8,multicasttransport:8,multipl:[0,7],mybrok:0,mylisten:[0,6],nack:[1,2,7],name:[0,7],need:[0,1,2,6,7],network:7,newlin:7,next:7,non:[0,8],none:[0,7,8],normal:1,notconnectedexcept:7,note:[0,1,2,3,7],notifi:7,number:[0,1,2,3,7],object:[7,8],obvious:8,occasion:7,occur:7,octob:5,off:1,offici:7,offset:7,on_before_messag:[0,7],on_connect:[0,7],on_disconnect:[0,7],on_error:[0,6,7],on_heartbeat:7,on_heartbeat_timeout:7,on_messag:[0,6,7],on_receipt:[0,7],on_receiver_loop_complet:7,on_send:[0,7],onc:[0,1,6,7],one:[0,3,7,8],onli:[0,3],oper:7,option:[0,1,7],order:[0,7],org:7,other:[0,2,3,8],out:[5,7],outbound:7,outgo:7,output:0,outsid:7,outstand:[2,3],over:[7,8],overrid:7,override_thread:7,own:[0,7],pack:7,packag:[4,6],packet:7,page:[0,2,7],pair:7,param:7,paramet:[0,1,7,8],pars:7,parse_fram:7,parse_head:7,pass:[0,1,6],passcod:[0,7,8],password:[0,1,6,7],past:3,path:7,payload:7,per:[0,7],percentag:7,perform:[7,8],perfunctorili:3,period:7,pictur:3,piec:7,pieuchot:3,pip:[3,6],platform:3,pleas:2,plu:[0,7],point:[0,7],port:[0,1,6,7],possibl:[0,5],pre:7,predomin:7,prefer_localhost:[0,7],preserv:7,previou:7,print:[0,1,6],print_to_log:7,printinglisten:[0,7],prior:2,process:[0,7],process_fram:[7,8],program:[],programmat:[1,6],project:[2,3,7],prompt:1,protocol10:7,protocol11:7,protocol12:[0,7,8],protocol:[0,1,2,3,4,5,6,8],protocol_tlsv1:[0,7],protocol_x:7,provid:[0,1,6,7],publish:7,py2:[],py3:[],python2:[],python3:6,python:[1,3,6],queue:[0,1,6,7],quick:2,quit:1,rabbitmq:[3,5],rafael:3,rais:[3,7],random:7,randomli:[3,7],rang:0,rather:[7,8],raw:[7,8],read:7,readi:7,real:7,realli:[],reattempt:7,receipt:[0,7,8],receipt_id:7,receiv:[1,2,6,7,8],receiver_loop:7,recommend:5,reconnect:[0,7],reconnect_attempts_max:[0,7],reconnect_sleep_increas:[0,7],reconnect_sleep_initi:[0,7],reconnect_sleep_jitt:[0,7],reconnect_sleep_max:[0,7],record:[1,7],recv:7,recv_byt:[0,7],reestablish:7,refer:[2,6],referenc:5,regardless:7,regist:7,registri:7,releas:7,remot:[],remov:7,remove_listen:7,report:[2,3],repres:[0,7],request:[0,1,3,7],requir:[0,1,7],reset:7,resourc:0,respons:[0,1,7],result:0,rise:3,roi:3,rollback:1,rtype:[],run:[0,1,6,7],safe:7,same:0,save:6,scale:7,scheid:3,schobel:3,scratch:3,script:1,scriptabl:3,search:2,second:[0,7],see:[0,1,2,6,7],seen:[0,6],self:[0,6],send:[1,2,3,6,7,8],send_fram:[7,8],sendfil:1,sendrec:1,sendrepli:1,sent:[0,1,7],separ:[1,7],sequenc:7,server:[0,1,7],session:0,set:[0,1,7],set_connect:7,set_listen:[0,6,7],set_receipt:7,set_ssl:7,setup:0,shb:7,should:7,show:1,shutdown:[0,7,8],side:7,signatur:7,signific:0,significantli:3,simpl:[0,6],simplest:0,simpli:[0,7],sinc:3,singl:7,site:6,sitepackag:6,sleep:[0,6,7],smidgen:3,socket:[0,7,8],some:[0,1,7],someth:3,sort:[0,7],specif:[0,2,7],specifi:[0,1,7],spent:3,ssl:[1,5,7],ssl_ca_cert:[0,7],ssl_cert_fil:[0,7],ssl_cert_valid:[0,7],ssl_key_fil:[0,7],ssl_version:[0,7],sslsocket:7,stall:3,stamped:7,standalon:1,standard:[0,8],start:[2,3,7],startup:[1,6],stat:[0,1],statist:[1,7],statslisten:[0,7],step:0,still:8,stomp:[0,1,5],stompconnection10:7,stompconnection11:7,stompconnection12:[0,7],stompexcept:7,stompserv:3,stomptest:6,stop:[7,8],str:[0,7,8],string:7,structur:7,strulyov:3,subclass:[0,7],submodul:4,subpackag:4,subscrib:[0,1,6,7,8],subscribe_ack_head:7,subscript:[0,7],subsequ:[0,3],success:[0,1,6],suit:[],sun:3,support:[0,3,7],sys:6,system:[0,1,7],take:0,tatiana:3,tcp:7,telecommun:3,tell:0,test1:0,test2:0,test3:0,test4:0,test5:0,test:[0,1,2,3,6,7],testlisten:7,text:3,than:[0,7,8],thei:0,them:7,thi:[0,1,2,5,6,7],those:[2,3],thread:[7,8],three:7,through:[0,7,8],thrown:7,time:[0,3,6,7],timeout:[0,7],timestamp:7,togeth:7,topic:[0,1,7],transact:[2,7],transmiss:7,transmit:[0,7],transport:[0,4,8],try_loopback_connect:[0,7],tupl:[0,7],turn:7,twice:7,two:1,txid:0,type:[0,1,6,7,8],typic:8,underli:7,uniqu:[0,7],unit:2,unix:1,unsubscrib:[0,1,7,8],until:[0,7],usag:[0,1],use:[0,1,2,3,7,8],use_ssl:[0,7],used:7,useful:3,user:[0,1,7],usernam:[0,1,6,7,8],uses:8,using:[0,1,2,3,6,7,8],usual:7,utf:[0,7,8],util:4,valid:7,validation_funct:7,valu:7,vantuyl:3,variat:3,variou:7,ver:1,verbos:1,version:[0,1,2,3,7],vhost:[0,7],via:[3,7],view:[2,3],vill:3,virtual:7,virtualbox:[],wai:0,wait:[0,6,7,8],wait_for_connect:7,wait_for_heartbeat:7,wait_for_messag:7,wait_on_disconnect:7,wait_on_receipt:[7,8],waitinglisten:7,want:[3,7,8],websocket:5,were:3,what:[1,7],when:[0,1,3,7],whenev:7,where:[0,1,7],whether:7,which:[0,3,7],within:1,without:7,work:3,world:[1,6],wrap:7,written:2,www:7,x509:7,year:3,you:[0,1,2,3,6,7,8],your:[0,7]},titles:["Using the API","Using the Command-line client application","Stomp.py 5.0.0 documentation","Introduction to Stomp.py","stomp","Other Projects/References","Quick start","stomp package","stomp.adapter package"],titleterms:{Using:[0,1],about:3,ack:0,adapt:8,api:[0,6],applic:1,backward2:[],backward3:[],backward:[],backwardsock25:[],backwardsock26:[],backwardsock:[],client:[1,6],color:[],colour:7,command:[1,6],connect:[0,7],constant:7,content:[7,8],contributor:3,deal:0,disconnect:0,document:2,establish:0,except:7,get:3,help:3,indic:2,introduct:3,line:[1,6],listen:7,messag:0,modul:[7,8],multicast:8,nack:0,other:5,packag:[7,8],project:5,protocol:7,quick:6,receiv:0,refer:5,send:0,start:6,stomp:[2,3,4,6,7,8],submodul:[7,8],subpackag:7,tabl:2,transact:0,transport:7,util:7}})