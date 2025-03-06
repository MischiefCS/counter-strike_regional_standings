### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, josi, poppins, yungher<br />
Global Rank: [102](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [22]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  702.2<br />
<br />
Final Rank Value (702.2) = Starting Rank Value (705.3) + Head To Head Adjustments (-3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.3
- 400 + ( ( 0.140 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 705.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1129 | 2024-12-01 | FURIA Esports Female | L   | 0.165      | -            | -                | -                | -         |    -1.61 | annaEX, goddess, josi, poppins, yungher |
|            5 |     1152 | 2024-11-30 | MIBR Female          | W   | 0.158      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.158) |     1.42 | annaEX, goddess, josi, poppins, yungher |
|            4 |     1158 | 2024-11-30 | FURIA Esports Female | L   | 0.158      | -            | -                | -                | -         |    -1.54 | annaEX, goddess, josi, poppins, yungher |
|            3 |     1281 | 2024-11-23 | Eco Warriors         | L   | 0.111      | -            | -                | -                | -         |    -1.63 | annaEX, goddess, josi, poppins, yungher |
|            2 |     1307 | 2024-11-22 | Imperial Female      | L   | 0.104      | -            | -                | -                | -         |    -0.80 | annaEX, goddess, josi, poppins, yungher |
|            1 |     1316 | 2024-11-22 | FlyQuest RED         | W   | 0.103      | 0.524        | 0.004 (0.000)    | 0.000 (0.000)    | 1 (0.103) |     0.99 | annaEX, goddess, josi, poppins, yungher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,101.28)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-01 |      0.166 | $1,673.82      | $277.81         |
| 2024-11-24 |      0.118 | $7,000.00      | $823.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
