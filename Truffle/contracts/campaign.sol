pragma solidity >=0.4.22 <0.6.0;

contract campaignFactory{
    
    address[] public deployedCampaign;
    
    function deployCampaignContract(uint256 minimum) public {
        address newAddress =address(new campaign(minimum,msg.sender));
        deployedCampaign.push(newAddress);
    }
    
    function getAllDeployedCampaign() public view  returns(address[] memory){
        return deployedCampaign;
    }
    
    
}

contract campaign{
    struct Request{
        string description;
        uint256 value;
        address payable recipent;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
        
    }
    
    address public manager;
    uint256 public minimumcontribution;
    mapping(address => bool) approvers;
    Request[] public request;
    uint256 public approversCount;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint256 minimum,address creator) public{
        manager = creator;
        minimumcontribution = minimum;
    }
    
    function contribute() payable public {
        require(msg.value >= minimumcontribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    
    function createRequest(string memory description,uint256 value,address payable recipent)  public restricted {
      Request memory newRequest = Request({
          description: description,
          value: value,
          recipent: recipent,
          complete: false,
          approvalCount: 0
      });
      request.push(newRequest);
    }
    
    function approve(uint index) public {
        Request storage request = request[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender]=true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = request[index]; 
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));
        request.complete = true;
        request.recipent.transfer(request.value);
    }
    
    function getSummary() public view returns(uint,uint,uint,uint,address){
        return(
               minimumcontribution,
               address(this).balance,
               request.length,
               approversCount,
               manager
            );
    }
    
    function getRequestsCount() public view returns (uint){
        return request.length;
    }
}