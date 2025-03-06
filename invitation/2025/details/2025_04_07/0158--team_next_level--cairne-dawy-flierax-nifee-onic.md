### Roster Details<br />
Team Name: TEAM NEXT LEVEL<br />
Roster: cairne, Dawy, Flierax, nifee, onic<br />
Global Rank: [158](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [102]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  638.4<br />
<br />
Final Rank Value (638.4) = Starting Rank Value (654.3) + Head To Head Adjustments (-16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.3
- 400 + ( ( 0.123 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 654.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       94 | 2025-02-23 | Inner Circle Esports | L   | 0.911      | -            | -                | -                | -         |   -19.56 | cairne, Dawy, Flierax, nifee, onic     |
|            6 |      367 | 2025-02-10 | Nemiga Gaming        | L   | 0.824      | -            | -                | -                | -         |    -7.27 | cairne, Dawy, Flierax, nifee, onic     |
|            5 |      376 | 2025-02-10 | Team Falcons         | L   | 0.823      | -            | -                | -                | -         |    -0.03 | cairne, Dawy, Flierax, nifee, onic     |
|            4 |      433 | 2025-02-08 | Ex-Daystar           | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.066 (0.008)    | 0 (0.000) |     4.86 | cairne, Dawy, Flierax, nifee, s-chilla |
|            3 |      438 | 2025-02-08 | OG                   | L   | 0.812      | -            | -                | -                | -         |    -6.67 | cairne, Dawy, Flierax, nifee, s-chilla |
|            2 |      450 | 2025-02-08 | CYBERSHOKE Esports   | W   | 0.812      | 0.143        | 0.010 (0.001)    | 1.000 (0.116)    | 0 (0.000) |    17.96 | cairne, Dawy, Flierax, nifee, s-chilla |
|            1 |      948 | 2024-12-09 | TEAM NEXT LEVEL      | L   | 0.405      | -            | -                | -                | -         |    -5.24 | ch1rs, Dawy, Flierax, nifee, Psycho    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($548.43)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.458 | $1,197.67      | $548.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
