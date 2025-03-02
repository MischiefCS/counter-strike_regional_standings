### Roster Details<br />
Team Name: Grindas<br />
Roster: AwwEzz, BaGyZ, fylzas, Sidivo, yakuza<br />
Global Rank: [448](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [281]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  545.5<br />
<br />
Final Rank Value (545.5) = Starting Rank Value (522.1) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 522.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2573 | 2024-11-21 | ALASKA                 | L   | 0.534      | -            | -                | -                | -         |    -1.72 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            9 |     2640 | 2024-11-20 | Permitta Esports       | L   | 0.527      | -            | -                | -                | -         |    -3.57 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            8 |     2654 | 2024-11-20 | Lausanne-Sport Esports | W   | 0.527      | 0.372        | 0.000 (0.000)    | 0.057 (0.011)    | 0 (0.000) |     7.92 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            7 |     3756 | 2024-10-31 | FORZE Reload           | W   | 0.394      | 0.372        | 0.026 (0.004)    | 0.558 (0.082)    | 0 (0.000) |    10.63 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            6 |     3759 | 2024-10-31 | Kubix Esports          | L   | 0.394      | -            | -                | -                | -         |    -1.34 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            5 |     3879 | 2024-10-29 | Partizan Esports       | L   | 0.380      | -            | -                | -                | -         |    -0.54 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            4 |     4096 | 2024-10-25 | Lazer Cats             | W   | 0.353      | 0.372        | 0.005 (0.001)    | 0.400 (0.053)    | 0 (0.000) |     8.18 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            3 |     4171 | 2024-10-23 | TEAM NEXT LEVEL        | L   | 0.340      | -            | -                | -                | -         |    -1.54 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            2 |     4223 | 2024-10-22 | HyperSpirit            | W   | 0.333      | 0.372        | 0.004 (0.000)    | 0.078 (0.010)    | 0 (0.000) |     6.76 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |
|            1 |     4241 | 2024-10-21 | UNiTY esports          | L   | 0.327      | -            | -                | -                | -         |    -1.42 | AwwEzz, BaGyZ, fylzas, Sidivo, yakuza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
