import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Text, 
  Card, 
  Avatar,
  Button,
  useTheme,
  Divider,
  List
} from 'react-native-paper';
import { Settings, CreditCard as Edit, Share, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>
            Profile
          </Text>
        </View>

        {/* Pet Profile */}
        <Card style={styles.profileCard}>
          <Card.Content style={styles.profileContent}>
            <Avatar.Image 
              size={80} 
              source={{ uri: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=200' }}
            />
            <View style={styles.profileInfo}>
              <Text variant="headlineSmall" style={{ color: theme.colors.onSurface }}>
                Max
              </Text>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                Golden Retriever
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                3 years old • 65 lbs
              </Text>
            </View>
            <Button 
              mode="outlined" 
              compact
              onPress={() => {}}
              icon={() => <Edit size={16} color={theme.colors.primary} />}
            >
              Edit
            </Button>
          </Card.Content>
        </Card>

        {/* Pet Details */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Pet Details
          </Text>
          
          <Card style={styles.detailsCard}>
            <Card.Content>
              <View style={styles.detailRow}>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                  Birthday
                </Text>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                  March 15, 2021
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                  Gender
                </Text>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                  Male
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                  Weight
                </Text>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                  65 lbs
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                  Microchip ID
                </Text>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                  982000123456789
                </Text>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Veterinarian Info */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Veterinarian
          </Text>
          
          <Card style={styles.vetCard}>
            <Card.Content>
              <Text variant="titleSmall" style={{ color: theme.colors.onSurface }}>
                Dr. Sarah Johnson
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                Sunny Valley Animal Hospital
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                (555) 123-4567
              </Text>
              <Button 
                mode="outlined" 
                compact
                style={styles.contactButton}
                onPress={() => {}}
              >
                Contact
              </Button>
            </Card.Content>
          </Card>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Settings
          </Text>
          
          <Card style={styles.settingsCard}>
            <List.Item
              title="App Settings"
              description="Notifications, privacy, and more"
              left={(props) => <Settings {...props} size={24} color={theme.colors.onSurface} />}
              onPress={() => {}}
            />
            <Divider />
            <List.Item
              title="Share App"
              description="Tell friends about Clever Paw"
              left={(props) => <Share {...props} size={24} color={theme.colors.onSurface} />}
              onPress={() => {}}
            />
            <Divider />
            <List.Item
              title="Help & Support"
              description="Get help or send feedback"
              left={(props) => <HelpCircle {...props} size={24} color={theme.colors.onSurface} />}
              onPress={() => {}}
            />
            <Divider />
            <List.Item
              title="Sign Out"
              description="Sign out of your account"
              left={(props) => <LogOut {...props} size={24} color={theme.colors.error} />}
              titleStyle={{ color: theme.colors.error }}
              onPress={() => {}}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    elevation: 2,
    borderRadius: 16,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileInfo: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginBottom: 12,
    fontWeight: '600',
  },
  detailsCard: {
    marginHorizontal: 20,
    elevation: 1,
    borderRadius: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  vetCard: {
    marginHorizontal: 20,
    elevation: 1,
    borderRadius: 12,
  },
  contactButton: {
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  settingsCard: {
    marginHorizontal: 20,
    elevation: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
});