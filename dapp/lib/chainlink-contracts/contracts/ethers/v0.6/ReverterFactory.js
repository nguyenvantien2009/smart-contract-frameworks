"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ReverterFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReverterFactory = ReverterFactory;
const _abi = [
    {
        stateMutability: "payable",
        type: "fallback"
    }
];
const _bytecode = "0x6080604052348015600f57600080fd5b50609280601d6000396000f3fe608060408190527f08c379a00000000000000000000000000000000000000000000000000000000081526020608452601660a4527f5261697365642062792052657665727465722e736f6c0000000000000000000060c452606490fdfea2646970667358221220492abdbed53c0f24c6f71966444389669a1520240bfab3a698365064d92caf4764736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2ZXJ0ZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmV2ZXJ0ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMkQ7QUFPM0QsTUFBYSxlQUFnQixTQUFRLHdCQUFlO0lBQ2xELFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWdDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQXNCLENBQUM7SUFDdEQsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFhLENBQUM7SUFDM0MsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQW9CLENBQUM7SUFDbEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFhLENBQUM7SUFDbkUsQ0FBQztDQUNGO0FBdkJELDBDQXVCQztBQUVELE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxlQUFlLEVBQUUsU0FBUztRQUMxQixJQUFJLEVBQUUsVUFBVTtLQUNqQjtDQUNGLENBQUM7QUFFRixNQUFNLFNBQVMsR0FDYixrV0FBa1csQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgVW5zaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnMvdXRpbHMvdHJhbnNhY3Rpb25cIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgUmV2ZXJ0ZXIgfSBmcm9tIFwiLi9SZXZlcnRlclwiO1xuXG5leHBvcnQgY2xhc3MgUmV2ZXJ0ZXJGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogUHJvbWlzZTxSZXZlcnRlcj4ge1xuICAgIHJldHVybiBzdXBlci5kZXBsb3kob3ZlcnJpZGVzKSBhcyBQcm9taXNlPFJldmVydGVyPjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBSZXZlcnRlciB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBSZXZlcnRlcjtcbiAgfVxuICBjb25uZWN0KHNpZ25lcjogU2lnbmVyKTogUmV2ZXJ0ZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIFJldmVydGVyRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogUmV2ZXJ0ZXIge1xuICAgIHJldHVybiBuZXcgQ29udHJhY3QoYWRkcmVzcywgX2FiaSwgc2lnbmVyT3JQcm92aWRlcikgYXMgUmV2ZXJ0ZXI7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmYWxsYmFja1wiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyMzQ4MDE1NjAwZjU3NjAwMDgwZmQ1YjUwNjA5MjgwNjAxZDYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA4MTkwNTI3ZjA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAyMDYwODQ1MjYwMTY2MGE0NTI3ZjUyNjE2OTczNjU2NDIwNjI3OTIwNTI2NTc2NjU3Mjc0NjU3MjJlNzM2ZjZjMDAwMDAwMDAwMDAwMDAwMDAwMDA2MGM0NTI2MDY0OTBmZGZlYTI2NDY5NzA2NjczNTgyMjEyMjA0OTJhYmRiZWQ1M2MwZjI0YzZmNzE5NjY0NDQzODk2NjlhMTUyMDI0MGJmYWIzYTY5ODM2NTA2NGQ5MmNhZjQ3NjQ3MzZmNmM2MzQzMDAwNjA2MDAzM1wiO1xuIl19