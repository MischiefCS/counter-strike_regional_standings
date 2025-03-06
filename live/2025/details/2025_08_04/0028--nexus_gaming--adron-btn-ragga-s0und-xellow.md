### Roster Details<br />
Team Name: Nexus Gaming<br />
Roster: ADRON, BTN, ragga, s0und, XELLOW<br />
Global Rank: [28](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [19]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  627.4<br />
<br />
Final Rank Value (627.4) = Starting Rank Value (629.0) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.0
- 400 + ( ( 0.087 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 629.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      163 | 2025-02-20 | BC.Game Esports   | L   | 0.096      | -            | -                | -                | -         |    -0.47 | ADRON, BTN, ragga, s0und, XELLOW |
|            4 |      279 | 2025-02-14 | Partizan Esports  | L   | 0.056      | -            | -                | -                | -         |    -0.39 | ADRON, BTN, ragga, s0und, XELLOW |
|            3 |      295 | 2025-02-13 | Fire Flux Esports | W   | 0.050      | 0.435        | 0.000 (0.000)    | 0.763 (0.017)    | 0 (0.000) |     0.56 | ADRON, BTN, ragga, s0und, XELLOW |
|            2 |      358 | 2025-02-10 | Hesta             | L   | 0.032      | -            | -                | -                | -         |    -0.66 | ADRON, BTN, ragga, s0und, XELLOW |
|            1 |      369 | 2025-02-10 | Metizport         | L   | 0.030      | -            | -                | -                | -         |    -0.63 | ADRON, BTN, ragga, s0und, XELLOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.37)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.065 | $2,000.00      | $130.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
