- 👋 Hi, I’m @nancy-gupta123
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...

<!---
nancy-gupta123/nancy-gupta123 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.

<!---Clone the linked with with targeting random node--->
---> Node *copyList(Node *head)
    {
        Node* curr=head;
        while(curr!=NULL){
            Node* next=curr->next;
            curr->next=new Node(curr->data);
            curr->next->next=next;
            curr=next;
        }
        for(Node* curr=head;curr!=NULL;curr=curr->next->next){
            curr->next->arb=(curr->arb==NULL)?NULL:curr->arb->next;
            
        }
        
        Node* h2=head->next;
        Node* copy=h2;
        for(Node* curr=head;curr!=NULL;curr=curr->next){
            curr->next=curr->next->next;
            copy->next=(copy->next!=NULL)?copy->next->next:NULL;
            copy=copy->next;
            
            
        }
        return h2;
        
    }
