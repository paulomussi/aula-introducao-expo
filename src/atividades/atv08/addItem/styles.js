import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFPercentage(4),
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#1E90FF',
  },
});
