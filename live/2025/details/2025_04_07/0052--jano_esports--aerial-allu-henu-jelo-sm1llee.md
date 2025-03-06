### Roster Details<br />
Team Name: JANO Esports<br />
Roster: Aerial, allu, HENU, jelo, Sm1llee<br />
Global Rank: [52](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  864.2<br />
<br />
Final Rank Value (864.2) = Starting Rank Value (845.9) + Head To Head Adjustments (18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.288[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 845.9
- 400 + ( ( 0.216 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 845.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      112 | 2025-02-22 | ENCE Academy      | W   | 0.904      | 0.143        | 0.007 (0.001)    | 0.176 (0.023)    | 1 (0.904) |    10.19 | Aerial, allu, HENU, jelo, Sm1llee |
|            5 |      132 | 2025-02-21 | Heimo Esports     | W   | 0.898      | 0.143        | 0.004 (0.001)    | 0.076 (0.010)    | 1 (0.898) |     7.31 | Aerial, allu, HENU, jelo, Sm1llee |
|            4 |     1849 | 2024-10-20 | ENCE Academy      | W   | 0.069      | 0.143        | 0.007 (0.000)    | 0.176 (0.002)    | 1 (0.069) |     0.84 | Aerial, allu, HENU, juho, xseveN  |
|            3 |     1890 | 2024-10-18 | B8                | L   | 0.057      | -            | -                | -                | -         |    -0.57 | Aerial, allu, HENU, juho, xseveN  |
|            2 |     1935 | 2024-10-16 | Ninjas in Pyjamas | W   | 0.044      | 0.589        | 0.012 (0.000)    | 0.087 (0.002)    | 1 (0.044) |     0.57 | Aerial, allu, HENU, juho, xseveN  |
|            1 |     1944 | 2024-10-16 | The MongolZ       | L   | 0.043      | -            | -                | -                | -         |    -0.00 | Aerial, allu, HENU, juho, xseveN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,770.35)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.904 | $3,139.38      | $2,839.17       |
| 2024-10-20 |      0.070 | $10,000.00     | $704.86         |
| 2024-10-20 |      0.069 | $3,262.27      | $226.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
