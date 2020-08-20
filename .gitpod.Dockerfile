FROM gitpod/workspace-mongodb
                    
USER gitpod

RUN bash -c ". ~/.nvm/nvm-lazy.sh && npm install -g @babel/standalone"